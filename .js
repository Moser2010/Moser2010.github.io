$(document).on("loadCustom", function() {
    var mobile = ($('#sidebar').width() < 300);
    var wayPoint = false;
    var circle = null;
    if (localStorage['sfw']) {
        $('span#brothel-text').text($.t('sidebar.loveInterest'));
        $('div#sfw').find('a').hide();
        $('div#sfw').find('a.original').show();
    }
    if (localStorage['hideWarn']) {
        $('#warn').remove();
    }
    if (localStorage['hide-all-' + window.map_path]) {
        $('#hide-all').hide();
        $('#show-all').show();
    }
    if (localStorage['hide-monsters']) {
        $('#info').addClass('hideMonsters');
        $('#hide-monsters').hide();
        $('#show-monsters').show();
    }
    var hackySticky = function() {
        if ($(window).height() > $('#sidebar-wrap').outerHeight() + $('div#copyright').outerHeight() + 45) {
            $('div#copyright').addClass('absolute');
        }
        else {
            $('div#copyright').removeClass('absolute');
        }
    };
    hackySticky();
    $(window).on('resize', function() {
        hackySticky();
    });
    $('div#sidebar').niceScroll({
        cursorcolor: '#5E4F32',
        cursorborder: 'none',
    });
    $('div#info').niceScroll({
        cursorcolor: '#5E4F32',
        cursorborder: 'none',
    });
    var map = L.map('map', {
        minZoom: 2,
        maxZoom: window.map_mZoom,
        center: window.map_center,
        zoom: 3,
        attributionControl: false,
        zoomControl: false,
        layers: allLayers
    });
    var go = function(cords) {
        map.panTo(cords);
        map.setZoom(window.map_mZoom);
        new L.marker(cords, {
            icon: L.icon({
                iconUrl: '../files/img/searchhover.png',
                iconSize: [22, 22]
            })
        }).addTo(map);
    };
    new L.Control.Zoom({
        position: 'topright'
    }).addTo(map);
    new L.Control.Fullscreen({
        position: 'topright'
    }).addTo(map);
    var hash = new L.Hash(map);
    var bounds = new L.LatLngBounds(window.map_sWest, window.map_nEast);
    map.setMaxBounds(bounds);
    if (!mobile) {
        var searchData = [];
        $.each(allLayers, function(key, layer) {
            $.each(layer._layers, function(key, marker) {
                searchData.push({
                    loc: [marker._latlng.lat, marker._latlng.lng],
                    title: marker._popup._content.replace(/<h1>/, '').replace(/<\/h1>/, ' - ').replace(/\\'/g, '')
                });
            });
        });
        searchData.sort(function(a, b) {
            if (a.title < b.title) {
                return -1;
            }
            if (a.title > b.title) {
                return 1;
            }
            return 0;
        });
        map.addControl(new L.Control.Search({
            autoResize: false,
            autoType: false,
            minLength: 2,
            position: 'topright',
            autoCollapse: false,
            zoom: 5,
            filterJSON: function(json) {
                return json;
            },
            callData: function(text, callResponse) {
                callResponse($.grep(searchData, function(data) {
                    return data.title.match(new RegExp(text, 'i'));
                }));
                setTimeout(function() {
                    $('.search-tooltip').getNiceScroll().resize();
                }, 200);
                return {
                    abort: function() {
                        console.log('aborted request: ' + text);
                    }
                };
            }
        }));
        $('.search-tooltip').niceScroll({
            cursorcolor: '#5E4F32',
            cursorborder: 'none',
            horizrailenabled: false
        });
    }
    L.tileLayer('../files/maps/' + window.map_path + '/{z}/{x}/{y}.png', {
        tms: true,
        bounds: bounds,
        noWrap: true
    }).addTo(map);
    map.dragging._draggable.on('predrag', function() {
        var pos = map._initialTopLeftPoint.subtract(this._newPos);
        this._newPos = this._newPos.subtract(map._getBoundsOffset(new L.Bounds(pos, pos.add(map.getSize())), map.options.maxBounds));
    });
    map.on('contextmenu', function(e) {
        if (!bounds.contains(e.latlng)) {
            return false;
        }
        if (wayPoint) {
            map.removeLayer(wayPoint);
        }
        wayPoint = new L.marker(e.latlng, {
            icon: L.icon({
                iconUrl: '../files/img/icons/waypoint.png',
                iconSize: [26, 32]
            })
        }).on('click', function() {
            map.removeLayer(wayPoint);
            hash.removeParam('w');
        }).on('contextmenu', function() {
            map.removeLayer(wayPoint);
            hash.removeParam('w');
        }).addTo(map);
        hash.addParam('w', e.latlng.lat.toFixed(3) + ',' + e.latlng.lng.toFixed(3));
    });
    $('.leaflet-marker-icon').on('contextmenu', function(e) {
        return false;
    });
    map.on('click', function(e) {
        console.log('Clicked at:');
        console.log('[' + e.latlng.lat.toFixed(3) + ', ' + e.latlng.lng.toFixed(3) + ']');
    });
    map.on('popupopen', function(e) {
        deleteCircle();
        createCircle(e.popup._latlng.lat.toFixed(3), e.popup._latlng.lng.toFixed(3));
        $('#info-wrap').stop();
        if (localStorage['sfw'] && e.popup._source._popup._content.match(/prostitute/i)) {
            $('#info').html('<h1>' + $.t('sidebar.loveInterest') + '</h1>' + $.t('misc.loveInterestDesc'));
        }
        else {
            $('#info').html(e.popup._source._popup._content);
        }
        $('#info').getNiceScroll(0).doScrollTop(0, 0);
        $('#info-wrap').fadeIn('fast');
        console.log('Popup at:');
        console.log('[' + e.popup._latlng.lat.toFixed(3) + ', ' + e.popup._latlng.lng.toFixed(3) + ']');
    });
    var createCircle = function(lat, long) {
        hash.addParam('m', lat + ',' + long);
        circle = L.circleMarker(L.latLng(lat, long), {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 20
        }).addTo(map);
        $('#centerButton').show();
    };
    var deleteCircle = function() {
        if (circle !== null) {
            map.removeLayer(circle);
            hash.removeParam('m');
            $('#centerButton').hide();
        }
    };
    map.on('popupclose', function(e) {
        $('#info-wrap').fadeOut('fast', function() {
            $('#info').html('');
            deleteCircle();
            map.closePopup();
        });
    });
    if (localStorage['markers-' + window.map_path]) {
        $.each($.parseJSON(localStorage['markers-' + window.map_path]), function(key, val) {
            if (val === false) {
                $('i.' + key).parent().addClass('layer-disabled');
                map.removeLayer(window.markers[key]);
            }
        });
    }
    $('ul.key:not(.controls) li:not(.none) i').each(function(i, e) {
        var marker = $(this).attr('class');
        var pill = $("<div class='pill'>" + window.markerCount[marker] + "</div>");
        $(this).next().after(pill);
        if (localStorage['hide-counts']) {
            pill.hide();
        }
    }).promise().done(function() {
        if (localStorage['hide-counts']) {
            $('#hide-counts').hide();
            $('#show-counts').show();
        }
    });
    $('#hide-all').on('click', function(e) {
        var remember = (!localStorage['markers-' + window.map_path]) ? {} : $.parseJSON(localStorage['markers-' + window.map_path]);
        $.each(allLayers, function(key, val) {
            map.removeLayer(val);
        });
        $.each($('ul.key:not(.controls) li:not(.none) i'), function(key, val) {
            remember[$(this).attr('class')] = false;
        });
        $('ul.key:first li').each(function(id, li) {
            $(li).addClass('layer-disabled');
        });
        $(this).hide();
        $('#show-all').show();
        localStorage['markers-' + window.map_path] = JSON.stringify(remember);
        localStorage['hide-all-' + window.map_path] = true;
    });
    $('#show-all').on('click', function(e) {
        var remember = (!localStorage['markers-' + window.map_path]) ? {} : $.parseJSON(localStorage['markers-' + window.map_path]);
        $.each(allLayers, function(key, val) {
            map.addLayer(val);
        });
        $.each($('ul.key:not(.controls) li:not(.none) i'), function(key, val) {
            remember[$(this).attr('class')] = true;
        });
        $('ul.key:first li').each(function(id, li) {
            $(li).removeClass('layer-disabled');
        });
        $(this).hide();
        $('#hide-all').show();
        localStorage['markers-' + window.map_path] = JSON.stringify(remember);
        localStorage.removeItem('hide-all-' + window.map_path);
    });
    $('#hide-counts').on('click', function(e) {
        $('ul.key:not(.controls) > li:not(.none) i').each(function(i, e) {
            $(this).siblings(':last').hide();
        });
        $(this).hide();
        $('#show-counts').show();
        localStorage['hide-counts'] = true;
    });
    $('#show-counts').on('click', function(e) {
        $('ul.key:not(.controls) > li:not(.none) i').each(function(i, e) {
            $(this).siblings(':last').show();
        });
        $(this).hide();
        $('#hide-counts').show();
        localStorage.removeItem('hide-counts');
    });
    $('#reset-tracking').on('click', function(e) {
        e.preventDefault();
        if (confirm($.t('controls.resetInvisConfirm'))) {
            resetInvisibleMarkers();
        }
    });
    $(document).on('click', 'li#hide-monsters', function(e) {
        localStorage['hide-monsters'] = true;
        $('#info').addClass('hideMonsters');
        $('#hide-monsters').hide();
        $('#show-monsters').show();
    });
    $(document).on('click', 'li#show-monsters', function(e) {
        localStorage.removeItem('hide-monsters');
        $('#info').removeClass('hideMonsters');
        $('#hide-monsters').show();
        $('#show-monsters').hide();
    });
    $('ul.key:not(.controls)').on('click', 'li:not(.none)', function(e) {
        var marker = $(this).find('i').attr('class');
        var remember = (!localStorage['markers-' + window.map_path]) ? {} : $.parseJSON(localStorage['markers-' + window.map_path]);
        if ($(this).hasClass('layer-disabled')) {
            map.addLayer(window.markers[marker]);
            $(this).removeClass('layer-disabled');
            remember[marker] = true;
        }
        else {
            map.removeLayer(window.markers[marker]);
            $(this).addClass('layer-disabled');
            remember[marker] = false;
        }
        localStorage['markers-' + window.map_path] = JSON.stringify(remember);
    });
    var origSidebar;
    var origBorder;
    var origHide;
    var origMap;
    var origInfoWrap;
    var origInfo;
    var hideSidebar = function() {
        origSidebar = $('#sidebar').css('left');
        origBorder = $('#sidebar-border').css('left');
        origHide = $('#hide-sidebar').css('left');
        origMap = $('#map').css('left');
        origInfoWrap = $('#info-wrap').css(['left', 'width']);
        origInfo = $('#info').css(['width', 'margin-right']);
        $('#info-wrap').css({
            'left': '0px',
            'width': '100%'
        });
        $('#info').css({
            'width': 'auto',
            'margin-right': '80px'
        });
        $('#map').css('left', '0px');
        map.invalidateSize();
        var base = $('#sidebar').outerWidth();
        $('#sidebar').animate({
            left: '-' + base + 'px'
        }, 200);
        $('#sidebar-border').animate({
            left: '-' + (base + 15) + 'px'
        }, 200);
        $('#hide-sidebar').animate({
            left: '0px'
        }, 200, function() {
            $('#hide-sidebar').addClass('show-sidebar');
        });
    };
    $(document).on('click', 'div#hide-sidebar:not(.show-sidebar)', function(e) {
        hideSidebar();
        localStorage['hide-sidebar'] = true;
    });
    $(document).on('click', 'div#hide-sidebar.show-sidebar', function(e) {
        showSidebar($(this));
        localStorage.removeItem('hide-sidebar');
    });
    var showSidebar = function(elem) {
        $('#sidebar').animate({
            left: origSidebar
        }, 200);
        $(elem).animate({
            left: origHide
        }, 200);
        $('#sidebar-border').animate({
            left: origBorder
        }, 200, function() {
            $('#map').css('left', origMap);
            map.invalidateSize();
            $('.show-sidebar').removeClass('show-sidebar');
            $('#sidebar').attr('style', '');
            $('#sidebar-border').attr('style', '');
            $('#info-wrap').css(origInfoWrap);
            $('#info').css(origInfo);
            $('#map').attr('style', '');
        });
    };
    if (localStorage['hide-sidebar']) {
        setTimeout(function() {
            hideSidebar();
        }, 500);
    }
    $(window).on('resize', function() {
        if ($('.show-sidebar').length && $(this).width() > 768) {
            $('#map').css('left', origMap);
            map.invalidateSize();
            $('.show-sidebar').removeClass('show-sidebar');
            $('#hide-sidebar').attr('style', '');
            $('#sidebar').attr('style', '');
            $('#sidebar-border').attr('style', '');
            $('#info-wrap').attr('style', '');
            $('#map').attr('style', '');
        }
    });
    $(document).on('click', 'div#warn', function(e) {
        localStorage['hideWarn'] = true;
        $(this).remove();
    });
    $('div#sfw').on('click', 'a.gotosfw', function(e) {
        e.preventDefault();
        if (confirm($.t('misc.nsfwConfirm'))) {
            localStorage['sfw'] = true;
            $('span#brothel-text').text($.t('sidebar.loveInterest'));
            $('div#sfw > a.gotosfw').hide();
            $('div#sfw > a.original').show();
        }
    });
    $('div#sfw').on('click', 'a.original', function(e) {
        e.preventDefault();
        if ($.t('misc.nsfwUndo')) {
            localStorage.removeItem('sfw');
            $('span#brothel-text').text($.t('sidebar.brothel'));
            $('div#sfw > a.original').hide();
            $('div#sfw > a.gotosfw').show();
        }
    });
    var popupClick = function(e) {
        if ($(e.target).is('#popup-content') || $(e.toElement.offsetParent).is('#popup-content') || $(e.toElement.offsetParent).is('#popup-wrap')) {
            return;
        }
        popupClose();
    };
    window.popupClose = function() {
        $('#popup-wrap').remove();
        $(document).off('click', '*', popupClick);
    };
    var popup = function(title, content) {
        $('body').prepend('<div id="popup-wrap"><div id="popup-border"><img id="popup-close" src="../files/img/exit.png" alt="Close" onclick="popupClose();"><div id="popup-content"><h1>' + title + '</h1><hr>' + content + '</div></div></div>');
        $('div#popup-content').niceScroll({
            cursorcolor: '#5E4F32',
            cursorborder: 'none',
            autohidemode: false,
            railpadding: {
                top: 22,
                right: 5,
                bottom: 5
            }
        });
        $(document).on('click', '*', popupClick);
    };
    $(document).on('click', '.credits', function(e) {
        e.preventDefault();
        popup('Credits', ['<p>Created by <a href="https://github.com/untamed0" target="_blank">untamed0</a>, with contributions from:</p>', '<ul>', '<li><a href="https://github.com/mcarver" target="_blank">mcarver</a> (lead contributor) - Marker count, hash permalink improvements, backup/restore settings, numerous fixes etc</li>', '<li><a href="https://github.com/ankri" target="_blank">ankri</a> - Ability to hide markers on right or double click</li>', '<li><a href="https://github.com/ITroxxCH" target="_blank">ITroxxCH</a> - Translation/i18n implementation</li>', '<li><a href="https://github.com/msmorgan" target="_blank">msmorgan</a> - Javascript &amp; map data structure improvements</li>', '<li><a href="https://twitter.com/DesignGears" target="_blank">@DesignGears</a> &amp <a href="https://github.com/hhrhhr" target="_blank">hhrhhr</a> - Map &amp; asset extraction</li>', '</ul>', '<p>Thanks to the following people for contributions to improving the map data:<br>', 'todo</p>', '<h3>Translations</h3>', '<ul>', '<li>German - <a href="https://github.com/ITroxxCH" target="_blank">ITroxxCH</a></li>', '</ul>', '<p>Special thanks to <a href="https://crowdin.com" target="_blank">crowdin</a> for letting us use their excellent translation editor</p>', '<h3>Witcher 3 Assets</h3>', '<p>The Witcher 3, logo, icons, map &amp; text are the property of <a href="http://en.cdprojektred.com/" target="_blank">CD PROJEKT RED</a> and used without permission. Non commercial use is permitted under section 9.4 of their <a href="http://bar.cdprojektred.com/regulations/" target="_blank">User Agreement</a></p>', '<h3>Javascript libraries used</h3>', '<ul>', '<li><a href="http://jquery.com" target="_blank">jQuery</a> (MIT)</li>', '<li><a href="http://git.io/vkLly" target="_blank">jQuery.NiceScroll</a> (MIT)</li>', '<li><a href="http://leafletjs.com" target="_blank">Leaflet</a> (BSD2)</li>', '<li><a href="http://git.io/vkfA2" target="_blank">Leaflet.label</a> (MIT)</li>', '<li><a href="http://git.io/mwK1oA" target="_blank">Leaflet-hash</a> (MIT)</li>', '<li><a href="http://git.io/vJw5v" target="_blank">Leaflet.fullscreen</a> (BSD2)</li>', '<li><a href="http://git.io/vkCPC" target="_blank">Leaflet Control Search</a> (MIT)</li>', '<li><a href="http://git.io/vIAs2" target="_blank">Font Awesome</a> (MIT)</li>', '</ul>'].join('\n'));
    });
    setTimeout(function() {
        $('ul.key:not(.controls) li:not(.none) i').each(function(i, e) {
            var key = $(this).attr('class');
            key = $.t("sidebar." + key);
            var tooltip = $("<span class='tooltip'>" + key + "</span>");
            var ellipsis = $(this).next();
            if (ellipsis.outerWidth() < ellipsis[0].scrollWidth) {
                $(this).parent().mousemove(function(e) {
                    var x = e.clientX,
                        y = e.clientY;
                    var offset = $("#logo").offset();
                    y = y - offset.top;
                    tooltip.css('top', (y + 15) + 'px');
                    tooltip.css('left', (x + 15) + 'px');
                    tooltip.css('display', 'block');
                }).mouseleave(function() {
                    tooltip.css('display', 'none');
                });
            }
            $("#sidebar-wrap").append(tooltip);
        });
        $('ul.controls li:not(.none) i').each(function(i, e) {
            var key = $(this).next().text();
            var tooltip = $("<span class='tooltip'>" + key + "</span>");
            var ellipsis = $(this).next();
            if (ellipsis.outerWidth() < ellipsis[0].scrollWidth) {
                $(this).parent().mousemove(function(e) {
                    var x = e.clientX,
                        y = e.clientY;
                    var offset = $("#logo").offset();
                    y = y - offset.top;
                    tooltip.css('top', (y + 15) + 'px');
                    tooltip.css('left', (x + 15) + 'px');
                    tooltip.css('display', 'block');
                }).mouseleave(function() {
                    tooltip.css('display', 'none');
                });
            }
            $("#sidebar-wrap").append(tooltip);
        });
    }, 100);
    var fileSaver = null;
    var backupData = function() {
        var currentDate = new Date();
        var formattedDate = currentDate.getFullYear() + '-' + ((currentDate.getMonth() + 1 < 10) ? '0' : '') + (currentDate.getMonth() + 1) + '-' + ((currentDate.getDate() < 10) ? '0' : '') + currentDate.getDate();
        var backupFileName = 'witcher3map_backup_' + formattedDate + '.json';
        if (confirm($.t('controls.backupSave', {
                fileName: backupFileName
            }))) {
            if (!fileSaver) {
                fileSaver = $.getScript('../files/js/FileSaver.min.js', function() {
                    var blob = new Blob([JSON.stringify(localStorage)], {
                        type: "text/plain;charset=utf-8"
                    });
                    saveAs(blob, backupFileName);
                });
            }
        }
    };
    var showRestore = function() {
        if (!window.File && !window.FileReader && !window.FileList && !window.Blob) {
            alert($.t('controls.backupHtmlFail'));
            return;
        }
        if ($('#restoreDiv').length) return;
        var restoreButtonPos = $('#restoreButton')[0].getBoundingClientRect();
        var restoreDiv = '<div id="restoreDiv" style="top:' + restoreButtonPos.top + 'px;right:' + (14 + restoreButtonPos.right - restoreButtonPos.left) + 'px;"><div style="float:right;"><button class="fa fa-times-circle" onclick="$(\'#restoreDiv\').remove()" style="cursor:pointer" /></div><strong>' + $.t('controls.backupLoad') + '</strong><br/><input type="file" id="files" name="file[]" /></div>';
        $('body').append($(restoreDiv));
        var filesInput = document.getElementById('files');
        filesInput.addEventListener('change', function(e) {
            var file = e.target.files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                var content = e.target.result;
                try {
                    var restoreData = $.parseJSON(content);
                    console.log('restore started.');
                    for (var prop in restoreData) {
                        console.log('restoring property:' + prop + ' using value:' + restoreData[prop]);
                        localStorage[prop] = restoreData[prop];
                    }
                    console.log('restore complete!');
                    alert($.t('controls.backupLoadSuccess'));
                    location.reload();
                }
                catch (err) {
                    alert($.t('controls.backupLoadFail'));
                    console.log(err.message);
                }
                finally {
                    $('#restoreDiv').remove();
                }
            };
            reader.readAsText(file);
        });
    };
    var backupButton = L.easyButton('fa-floppy-o', function(btn, map) {
        backupData();
    }, 'Backup Data');
    var restoreButton = L.easyButton('fa-upload', function(btn, map) {
        showRestore();
    }, 'Restore Data', 'restoreButton');
    L.easyBar([backupButton, restoreButton]).addTo(map);
    L.easyButton('fa-crosshairs', function(btn, map) {
        hashParams = hash.getHashParams();
        if (hashParams && hashParams.m) {
            var hashMarker = hashParams.m.split(",");
            map.setView([hashMarker[0], hashMarker[1]]);
        }
        else {
            map.setView(map_center);
        }
    }, 'Center Highlighted Marker', 'centerButton').addTo(map);
    var hashParams = hash.getHashParams();
    if (hashParams) {
        if (hashParams.w) {
            var hashWayPoint = hashParams.w.split(",");
            wayPoint = new L.marker(L.latLng(hashWayPoint[0], hashWayPoint[1]), {
                icon: L.icon({
                    iconUrl: '../files/img/icons/waypoint.png',
                    iconSize: [26, 32]
                })
            }).on('click', function() {
                map.removeLayer(wayPoint);
                hash.removeParam('w');
            }).on('contextmenu', function() {
                map.removeLayer(wayPoint);
                hash.removeParam('w');
            }).addTo(map);
        }
        if (hashParams.m) {
            var hashMarker = hashParams.m.split(",");
            $.each(allLayers, function(key, val) {
                $.each(val.getLayers(), function(key, marker) {
                    if (hashMarker[0] == marker._latlng.lat && hashMarker[1] == marker._latlng.lng) {
                        marker.openPopup();
                    }
                });
            });
        }
        else {
            $('#centerButton').hide();
        }
    }
    else {
        $('#centerButton').hide();
    }
});

















$(document).on("loadMapdata", function() {
    window.map_path = 'white_orchard';
    window.map_sWest = L.latLng(-85, -180);
    window.map_nEast = L.latLng(0, 45);
    window.map_center = [-65, -65];
    window.map_mZoom = 5;
    processData({
        abandoned: [{
            coords: [
                [-77.786, -48.604],
                [-65.293, -152.842]
            ],
            label: $.t("abandoned.label"),
            popup: $.t("abandoned.desc")
        }],
        alchemy: [],
        armourer: [{
            coords: [
                [-69.069, -88.945]
            ],
            label: $.t("w:armourer.amateurLabel"),
            popup: $.t("w:armourer.desc")
        }],
        armourerstable: [{
            coords: [
                [-25.362, -152.539],
            ],
            label: $.t("armourerstable.label"),
            popup: $.t("armourerstable.desc")
        }],
        banditcamp: [{
            coords: [
                [-81.596, -122.168],
                [-73.800, -43.418],
                [-53.678, -157.720],
                [-34.307, -25.537],
                [-72.462, -16.699],
                [-66.000, -19.688]
            ],
            label: $.t("w:banditcamp.label"),
            popup: $.t("w:banditcamp.desc")
        }],
        barber: [],
        blacksmith: [{
            coords: [
                [-26.981, -151.348]
            ],
            label: $.t("w:blacksmith.amateurLabel"),
            popup: $.t("w:blacksmith.desc")
        }],
        brothel: [],
        entrance: [{
            coords: [
                [-79.592, -84.199]
            ],
            label: $.t("entrance.label"),
            popup: $.t("entrance.desc"),
        }, {
            coords: [
                [-77.897, -75.586]
            ],
            label: $.t("entrance.label"),
            popup: $.t("entrance.desc")
        }],
        grindstone: [{
            coords: [
                [-68.948, -88.006],
                [-68.648, -88.206],
                [-64.624, -155.215],
                [-26.902, -149.941]
            ],
            label: $.t("grindstone.label"),
            popup: $.t("grindstone.desc")
        }],
        guarded: [{
            coords: [
                [-74.914, -59.766],
                [-48.517, -167.695],
                [-29.645, -96.943],
                [-27.333, -134.077],
                [-74.776, 0.352]
            ],
            label: $.t("guarded.label"),
            popup: $.t("guarded.desc")
        }],
        gwent: [{
            coords: [
                [-65.946, -81.387]
            ],
            label: $.t("w:gwent.label.player"),
            popup: $.t("w:gwent.desc.player") + $.t("w:gwent.desc.warn")
        }],
        harbor: [],
        herbalist: [{
            coords: [
                [-66.267, -132.627]
            ],
            label: $.t("herbalist.label"),
            popup: $.t("herbalist.desc")
        }, {
            coords: [
                [-77.542, -49.043]
            ],
            label: $.t("herbalist.label"),
            popup: $.t("w:misc.liberated") + $.t("herbalist.desc")
        }],
        hidden: [{
            coords: [
                [-47.220, -111.006],
                [-39.028, -56.865],
                [-28.613, -42.188]
            ],
            label: $.t("hidden.label"),
            popup: $.t("hidden.desc")
        }],
        innkeep: [{
            coords: [
                [-65.731, -80.068]
            ],
            label: $.t("w:innkeep.inns.whiteOrchardInn"),
            popupTitle: $.t("w:innkeep.popup"),
            popup: $.t("w:innkeep.desc.foodDrinkAndGwent") + $.t("w:misc.disappears")
        }],
        monsterden: [],
        monsternest: [{
            coords: [
                [-14.264, -95.625],
                [-45.027, -0.308],
                [-64.206, 9.712]
            ],
            label: $.t("monsternest.label"),
            popup: $.t("monsternest.desc")
        }],
        notice: [{
            coords: [
                [-67.643, -89.385]
            ],
            label: $.t("notice.label"),
            popup: $.t("notice.desc")
        }],
        pid: [],
        pop: [{
            coords: [
                [-81.492, -106.699]
            ],
            label: $.t("pop.label"),
            popupTitle: $.t("pop.popup", {
                sign: $.t("signs.quen")
            }),
            popup: $.t("pop.desc")
        }, {
            coords: [
                [-79.703, -52.822]
            ],
            label: $.t("pop.label"),
            popupTitle: $.t("pop.popup", {
                sign: $.t("signs.yrden")
            }),
            popup: $.t("pop.desc")
        }, {
            coords: [
                [-51.536, -130.386]
            ],
            label: $.t("pop.label"),
            popupTitle: $.t("pop.popup", {
                sign: $.t("signs.axii")
            }),
            popup: $.t("pop.desc")
        }, {
            coords: [
                [-34.235, -94.043]
            ],
            label: $.t("pop.label"),
            popupTitle: $.t("pop.popup", {
                sign: $.t("signs.igni")
            }),
            popup: $.t("pop.desc")
        }, {
            coords: [
                [-13.325, -97.559]
            ],
            label: $.t("pop.label"),
            popupTitle: $.t("pop.popup", {
                sign: $.t("signs.aard")
            }),
            popup: $.t("pop.desc")
        }, {
            coords: [
                [-43.771, 0.308]
            ],
            label: $.t("pop.label"),
            popupTitle: $.t("pop.popup", {
                sign: $.t("signs.quen")
            }),
            popup: $.t("pop.desc")
        }],
        poi: [{
            coords: [
                [-49.611, 7.998]
            ],
            label: $.t("w:poi.label.lootableBattlefield"),
            popup: $.t("w:poi.desc.lootableBattlefield")
        }, {
            coords: [
                [-72.5, -17]
            ],
            label: $.t("w:poi.label.serpentineSteelSword"),
            popup: $.t("w:poi.desc.serpentineSteelSword")
        }, {
            coords: [
                [-32.953, -95.142]
            ],
            label: $.t("w:poi.label.serpentineSilverSword"),
            popup: $.t("w:poi.desc.serpentineSilverSword")
        }, {
            coords: [
                [-60, 2]
            ],
            label: $.t("w:poi.label.crystalSkull"),
            popup: $.t("w:poi.desc.crystalSkull")
        }],
        shopkeeper: [{
            coords: [
                [-66.320, -75.674]
            ],
            label: $.t("w:shopkeeper.label.shopkeeper"),
            popup: $.t("w:shopkeeper.desc.gwentCraftingAndHorse")
        }, {
            coords: [
                [-66.338, -155.654]
            ],
            label: $.t("w:shopkeeper.label.shopkeeper"),
            popup: $.t("w:shopkeeper.desc.alchemyRunesAndFood")
        }],
        signpost: [{
            coords: [
                [-78.955, -85.869]
            ],
            label: $.t("w:signpost.label.abandonedVillage"),
            popup: $.t("w:signpost.desc.abandonedVillage")
        }, {
            coords: [
                [-77.916, -109.819]
            ],
            label: $.t("w:signpost.label.brokenBridge"),
            popup: $.t("w:signpost.desc.brokenBridge")
        }, {
            coords: [
                [-67.136, -72.202]
            ],
            label: $.t("w:signpost.label.woesongBridge"),
            popup: $.t("w:signpost.desc.woesongBridge")
        }, {
            coords: [
                [-65.440, -141.855]
            ],
            label: $.t("w:signpost.label.sawmill"),
            popup: $.t("w:signpost.desc.sawmill")
        }, {
            coords: [
                [-47.339, -89.912]
            ],
            label: $.t("w:signpost.label.mill"),
            popup: $.t("w:signpost.desc.mill")
        }, {
            coords: [
                [-20.468, -153.281]
            ],
            label: $.t("w:signpost.label.nilfgaardianGarrison"),
            popup: $.t("w:signpost.desc.nilfgaardianGarrison")
        }, {
            coords: [
                [-46.073, -13.271]
            ],
            label: $.t("w:signpost.label.cacklerBridge"),
            popup: $.t("w:signpost.desc.cacklerBridge")
        }, {
            coords: [
                [-63.015, -4.482]
            ],
            label: $.t("w:signpost.label.crossroads"),
            popup: $.t("w:signpost.desc.crossroads")
        }, {
            coords: [
                [-68.106, -37.266]
            ],
            label: $.t("w:signpost.label.ford"),
            popup: $.t("w:signpost.desc.ford")
        }, {
            coords: [
                [-71.413, 1.230]
            ],
            label: $.t("w:signpost.label.ransackedVillage"),
            popup: $.t("w:signpost.desc.ransackedVillage")
        }],
        smugglers: [{
            coords: [
                [-76.720, -31.201]
            ],
            label: $.t("smugglers.label"),
            popup: $.t("smugglers.desc")
        }],
        spoils: [{
            coords: [
                [-12.726, -128.452]
            ],
            label: $.t("spoils.label"),
            popup: $.t("spoils.desc")
        }]
    });
    window.allLayers = [markers.abandoned, markers.alchemy, markers.armourer, markers.armourerstable, markers.banditcamp, markers.barber, markers.blacksmith, markers.brothel, markers.entrance, markers.grindstone, markers.guarded, markers.gwent, markers.harbor, markers.herbalist, markers.hidden, markers.innkeep, markers.monsterden, markers.monsternest, markers.notice, markers.pid, markers.pop, markers.poi, markers.shopkeeper, markers.signpost, markers.smugglers, markers.spoils];
});