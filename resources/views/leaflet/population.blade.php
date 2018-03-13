<link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
      integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ=="
      crossorigin=""/>
<!-- Make sure you put this AFTER Leaflet's CSS -->
<script src="https://unpkg.com/leaflet@1.3.1/dist/leaflet.js"
        integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw=="
        crossorigin=""></script>


<script src="https://unpkg.com/shapefile@0.6.6/dist/shapefile.js"></script>

<script src="https://unpkg.com/d3-array@1"></script>
<script src="https://unpkg.com/d3-geo@1"></script>
<script src="https://unpkg.com/d3-geo-projection@2"></script>
<script src="https://unpkg.com/shapefile@0.6"></script>

<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js'></script>

<script src="../../../geojson/district" type="text/javascript"></script>


<script src="../../../geojson/devregion" type="text/javascript"></script>

<script src="../../../geojson/province7" type="text/javascript"></script>

<script src="../../../geojson/population" type="text/javascript"></script>
<script src="../../../js/jquery-3.1.1.min.js" type="text/javascript"></script>


<script src="../../../js/hero.js" type="text/javascript"></script>



<link rel="stylesheet" src="../../../css/style.css">
<head>
    {!! Html::style('leaflet/css/leaflet-1.0.3.css') !!}
    {!! Html::style('leaflet/css/LeafletStyleSheet.css') !!}

    {!! Html::script('leaflet/js/leaflet-src-1.0.3.js') !!}
    {!! Html::script('leaflet/js/PruneCluster.js') !!}


    <script>

        !function () {
            function a(b, c, d) {
                var e = a.resolve(b);
                if (null == e) {
                    d = d || b, c = c || "root";
                    var f = new Error('Failed to require "' + d + '" from "' + c + '"');
                    throw f.path = d, f.parent = c, f.require = !0, f
                }
                var g = a.modules[e];
                return g.exports || (g.exports = {}, g.client = g.component = !0, g.call(this, g.exports, a.relative(e), g)), g.exports
            }

            a.modules = {}, a.aliases = {}, a.resolve = function (b) {
                "/" === b.charAt(0) && (b = b.slice(1));
                for (var c = [b, b + ".js", b + ".json", b + "/index.js", b + "/index.json"], d = 0; d < c.length; d++) {
                    var b = c[d];
                    if (a.modules.hasOwnProperty(b)) return b;
                    if (a.aliases.hasOwnProperty(b)) return a.aliases[b]
                }
            }, a.normalize = function (a, b) {
                var c = [];
                if ("." != b.charAt(0)) return b;
                a = a.split("/"), b = b.split("/");
                for (var d = 0; d < b.length; ++d) ".." == b[d] ? a.pop() : "." != b[d] && "" != b[d] && c.push(b[d]);
                return a.concat(c).join("/")
            }, a.register = function (b, c) {
                a.modules[b] = c
            }, a.alias = function (b, c) {
                if (!a.modules.hasOwnProperty(b)) throw new Error('Failed to alias "' + b + '", it does not exist');
                a.aliases[c] = b
            }, a.relative = function (b) {
                function c(a, b) {
                    for (var c = a.length; c--;) if (a[c] === b) return c;
                    return -1
                }

                function d(c) {
                    var e = d.resolve(c);
                    return a(e, b, c)
                }

                var e = a.normalize(b, "..");
                return d.resolve = function (d) {
                    var f = d.charAt(0);
                    if ("/" == f) return d.slice(1);
                    if ("." == f) return a.normalize(e, d);
                    var g = b.split("/"), h = c(g, "deps") + 1;
                    return h || (h = 0), d = g.slice(0, h + 1).join("/") + "/deps/" + d
                }, d.exists = function (b) {
                    return a.modules.hasOwnProperty(d.resolve(b))
                }, d
            }, a.register("calvinmetcalf-setImmediate/lib/index.js", function (a, b, c) {
                "use strict";

                function d() {
                    var a, b = 0, c = g;
                    for (g = []; a = c[b++];) a()
                }

                var e,
                    f = [b("./nextTick"), b("./mutation"), b("./postMessage"), b("./messageChannel"), b("./stateChange"), b("./timeout")],
                    g = [];
                f.some(function (a) {
                    var b = a.test();
                    return b && (e = a.install(d)), b
                });
                var h = function (a) {
                    var b, c;
                    return arguments.length > 1 && "function" == typeof a && (c = Array.prototype.slice.call(arguments, 1), c.unshift(void 0), a = a.bind.apply(a, c)), 1 === (b = g.push(a)) && e(d), b
                };
                h.clear = function (a) {
                    return a <= g.length && (g[a - 1] = function () {
                    }), this
                }, c.exports = h
            }), a.register("calvinmetcalf-setImmediate/lib/nextTick.js", function (a) {
                "use strict";
                a.test = function () {
                    return "object" == typeof process && "[object process]" === Object.prototype.toString.call(process)
                }, a.install = function () {
                    return process.nextTick
                }
            }), a.register("calvinmetcalf-setImmediate/lib/postMessage.js", function (a, b) {
                "use strict";
                var c = b("./global");
                a.test = function () {
                    if (!c.postMessage || c.importScripts) return !1;
                    var a = !0, b = c.onmessage;
                    return c.onmessage = function () {
                        a = !1
                    }, c.postMessage("", "*"), c.onmessage = b, a
                }, a.install = function (a) {
                    function b(b) {
                        b.source === c && b.data === d && a()
                    }

                    var d = "com.calvinmetcalf.setImmediate" + Math.random();
                    return c.addEventListener ? c.addEventListener("message", b, !1) : c.attachEvent("onmessage", b), function () {
                        c.postMessage(d, "*")
                    }
                }
            }), a.register("calvinmetcalf-setImmediate/lib/messageChannel.js", function (a, b) {
                "use strict";
                var c = b("./global");
                a.test = function () {
                    return !!c.MessageChannel
                }, a.install = function (a) {
                    var b = new c.MessageChannel;
                    return b.port1.onmessage = a, function () {
                        b.port2.postMessage(0)
                    }
                }
            }), a.register("calvinmetcalf-setImmediate/lib/stateChange.js", function (a, b) {
                "use strict";
                var c = b("./global");
                a.test = function () {
                    return "document" in c && "onreadystatechange" in c.document.createElement("script")
                }, a.install = function (a) {
                    return function () {
                        var b = c.document.createElement("script");
                        return b.onreadystatechange = function () {
                            a(), b.onreadystatechange = null, b.parentNode.removeChild(b), b = null
                        }, c.document.documentElement.appendChild(b), a
                    }
                }
            }), a.register("calvinmetcalf-setImmediate/lib/timeout.js", function (a) {
                "use strict";
                a.test = function () {
                    return !0
                }, a.install = function (a) {
                    return function () {
                        setTimeout(a, 0)
                    }
                }
            }), a.register("calvinmetcalf-setImmediate/lib/global.js", function (a, b, c) {
                c.exports = "object" == typeof global && global ? global : this
            }), a.register("calvinmetcalf-setImmediate/lib/mutation.js", function (a, b) {
                "use strict";
                var c = b("./global"), d = c.MutationObserver || c.WebKitMutationObserver;
                a.test = function () {
                    return d
                }, a.install = function (a) {
                    var b = new d(a), e = c.document.createElement("div");
                    return b.observe(e, {attributes: !0}), c.addEventListener("unload", function () {
                        b.disconnect(), b = null
                    }, !1), function () {
                        e.setAttribute("drainQueue", "drainQueue")
                    }
                }
            }), a.register("lie/lie.js", function (a, b, c) {
                function d(a) {
                    function b(a, b) {
                        return d(function (c, d) {
                            k.push({resolve: a, reject: b, resolver: c, rejecter: d})
                        })
                    }

                    function c(a, c) {
                        return l ? l(a, c) : b(a, c)
                    }

                    function h(a, b) {
                        for (var d, h, i = a ? "resolve" : "reject", j = 0, m = k.length; m > j; j++) d = k[j], h = d[i], "function" == typeof h ? g(f, h, b, d.resolver, d.rejecter) : a ? d.resolver(b) : d.rejecter(b);
                        l = e(c, b, a)
                    }

                    function i(a) {
                        l || h(!0, a)
                    }

                    function j(a) {
                        l || h(!1, a)
                    }

                    if (!(this instanceof d)) return new d(a);
                    var k = [], l = !1;
                    this.then = c;
                    try {
                        a(function (a) {
                            a && "function" == typeof a.then ? a.then(i, j) : i(a)
                        }, j)
                    } catch (m) {
                        j(m)
                    }
                }

                function e(a, b, c) {
                    return function (e, h) {
                        var i = c ? e : h;
                        return "function" != typeof i ? d(function (b, c) {
                            a(b, c)
                        }) : d(function (a, c) {
                            g(f, i, b, a, c)
                        })
                    }
                }

                function f(a, b, c, d) {
                    try {
                        var e = a(b);
                        e && "function" == typeof e.then ? e.then(c, d) : c(e)
                    } catch (f) {
                        d(f)
                    }
                }

                var g = b("immediate");
                c.exports = d
            }), a.alias("calvinmetcalf-setImmediate/lib/index.js", "lie/deps/immediate/lib/index.js"), a.alias("calvinmetcalf-setImmediate/lib/nextTick.js", "lie/deps/immediate/lib/nextTick.js"), a.alias("calvinmetcalf-setImmediate/lib/postMessage.js", "lie/deps/immediate/lib/postMessage.js"), a.alias("calvinmetcalf-setImmediate/lib/messageChannel.js", "lie/deps/immediate/lib/messageChannel.js"), a.alias("calvinmetcalf-setImmediate/lib/stateChange.js", "lie/deps/immediate/lib/stateChange.js"), a.alias("calvinmetcalf-setImmediate/lib/timeout.js", "lie/deps/immediate/lib/timeout.js"), a.alias("calvinmetcalf-setImmediate/lib/global.js", "lie/deps/immediate/lib/global.js"), a.alias("calvinmetcalf-setImmediate/lib/mutation.js", "lie/deps/immediate/lib/mutation.js"), a.alias("calvinmetcalf-setImmediate/lib/index.js", "lie/deps/immediate/index.js"), a.alias("calvinmetcalf-setImmediate/lib/index.js", "immediate/index.js"), a.alias("calvinmetcalf-setImmediate/lib/index.js", "calvinmetcalf-setImmediate/index.js"), a.alias("lie/lie.js", "lie/index.js"), L.Util.Promise = a("lie")
        }(), L.Util.ajax = function (url, options) {
            "use strict";
            if (options = options || {}, options.jsonp) return L.Util.ajax.jsonp(url, options);
            var request, cancel, out = L.Util.Promise(function (resolve, reject) {
                var Ajax;
                cancel = reject, Ajax = void 0 === window.XMLHttpRequest ? function () {
                    try {
                        return new ActiveXObject("Microsoft.XMLHTTP.6.0")
                    } catch (a) {
                        try {
                            return new ActiveXObject("Microsoft.XMLHTTP.3.0")
                        } catch (b) {
                            reject("XMLHttpRequest is not supported")
                        }
                    }
                } : window.XMLHttpRequest;
                var response;
                request = new Ajax, request.open("GET", url), request.onreadystatechange = function () {
                    4 === request.readyState && (request.status < 400 && options.local || 200 === request.status ? (window.JSON ? response = JSON.parse(request.responseText) : options.evil && (response = eval("(" + request.responseText + ")")), resolve(response)) : request.status ? reject(request.statusText) : reject("Attempted cross origin request without CORS enabled"))
                }, request.send()
            });
            return out.then(null, function (a) {
                return request.abort(), a
            }), out.abort = cancel, out
        }, L.Util.jsonp = function (a, b) {
            b = b || {};
            var c, d, e, f, g = document.getElementsByTagName("head")[0], h = L.DomUtil.create("script", "", g),
                i = L.Util.Promise(function (i, j) {
                    f = j;
                    var k = b.cbParam || "callback";
                    b.callbackName ? c = b.callbackName : (e = "_" + ("" + Math.random()).slice(2), c = "L.Util.jsonp.cb." + e), h.type = "text/javascript", e && (L.Util.jsonp.cb[e] = function (a) {
                        g.removeChild(h), delete L.Util.jsonp.cb[e], i(a)
                    }), d = -1 === a.indexOf("?") ? a + "?" + k + "=" + c : a + "&" + k + "=" + c, h.src = d
                }).then(null, function (a) {
                    return g.removeChild(h), delete L.Util.ajax.cb[e], a
                });
            return i.abort = f, i
        }, L.Util.jsonp.cb = {}, L.GeoJSON.AJAX = L.GeoJSON.extend({
            defaultAJAXparams: {
                dataType: "json",
                callbackParam: "callback",
                local: !1,
                middleware: function (a) {
                    return a
                }
            }, initialize: function (a, b) {
                this.urls = [], a && ("string" == typeof a ? this.urls.push(a) : "function" == typeof a.pop ? this.urls = this.urls.concat(a) : (b = a, a = void 0));
                var c = L.Util.extend({}, this.defaultAJAXparams);
                for (var d in b) this.defaultAJAXparams.hasOwnProperty(d) && (c[d] = b[d]);
                this.ajaxParams = c, this._layers = {}, L.Util.setOptions(this, b), this.on("data:loaded", function () {
                    this.filter && this.refilter(this.filter)
                }, this);
                var e = this;
                this.urls.length > 0 && L.Util.Promise(function (a) {
                    a()
                }).then(function () {
                    e.addUrl()
                })
            }, clearLayers: function () {
                return this.urls = [], L.GeoJSON.prototype.clearLayers.call(this), this
            }, addUrl: function (a) {
                var b = this;
                a && ("string" == typeof a ? b.urls.push(a) : "function" == typeof a.pop && (b.urls = b.urls.concat(a)));
                var c = b.urls.length, d = 0;
                b.fire("data:loading"), b.urls.forEach(function (a) {
                    "json" === b.ajaxParams.dataType.toLowerCase() ? L.Util.ajax(a, b.ajaxParams).then(function (a) {
                        var c = b.ajaxParams.middleware(a);
                        b.addData(c), b.fire("data:progress", c)
                    }, function (a) {
                        b.fire("data:progress", {error: a})
                    }) : "jsonp" === b.ajaxParams.dataType.toLowerCase() && L.Util.jsonp(a, b.ajaxParams).then(function (a) {
                        var c = b.ajaxParams.middleware(a);
                        b.addData(c), b.fire("data:progress", c)
                    }, function (a) {
                        b.fire("data:progress", {error: a})
                    })
                }), b.on("data:progress", function () {
                    ++d === c && b.fire("data:loaded")
                })
            }, refresh: function (a) {
                a = a || this.urls, this.clearLayers(), this.addUrl(a)
            }, refilter: function (a) {
                "function" != typeof a ? (this.filter = !1, this.eachLayer(function (a) {
                    a.setStyle({stroke: !0, clickable: !0})
                })) : (this.filter = a, this.eachLayer(function (b) {
                    a(b.feature) ? b.setStyle({stroke: !0, clickable: !0}) : b.setStyle({stroke: !1, clickable: !1})
                }))
            }
        }), L.geoJson.ajax = function (a, b) {
            return new L.GeoJSON.AJAX(a, b)
        };

    </script>

    <style>
        .the-hero{

            fillColor:'red';
            fillOpacity: 0.8;
            weight: 0.5;
        }

    </style>


</head>



@extends('layouts.app')

@section('title', 'Leaflet-PruneControl')

@include('_partials.head')


@section('content')

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                {!! Breadcrumbs::render('prune-control') !!}

                <div class="panel panel-default">

                    <div class="panel-body">

                        <div id="mymap" style="height: 560px; background-color: #2ab27b">

                            <div class="=container"></div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>

@endsection

@section('page-script')

  {{--  <script>

        var mymap = L.map('map').setView([28.05259082333986, 84.1552734375], 7);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 12,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoibnVsbGxwb2ludGVyIiwiYSI6ImNqZWUwcTN6ZzEyajEzM283NWhicWFiaW4ifQ.sPJ6IpoUvwa3oDWgclG6cw'
        }).addTo(mymap);


        var geojsonFeature = [{
            "type": "Feature",
            "properties": {
                "name": "Coors Field",
                "amenity": "Baseball Stadium",
                "popupContent": "This is where the Rockies play!"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [85.3756, 27.7307]
            }
        },

            {
                "type": "Feature",
                "properties": {
                    "name": "Moors Field",
                    "amenity": "Baseball Stadium",
                    "popupContent": "This is where the Rockies play!"
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [85.4759, 27.7309]
                }
            }


        ]

        //        var json = require('./nepal.json');


        L.geoJSON(geojsonFeature, {
            style: function (feature) {
                return {color: feature.properties.color};
            }
        }).bindPopup(function (layer) {
            return layer.feature.properties.name;
        }).addTo(mymap);


        //from geojson file adding all its properties to layer group

         var layerGroup = L.geoJSON(population, {
             onEachFeature: function (feature, layer) {
                 layer.bindPopup('<h1>' + feature.properties.name + '</h1><p>Population: ' + feature.properties.total + '</p>' + '<p>Female: ' + feature.properties.female + '</p>');
             }
         }).addTo(mymap);


        /*var grayscale = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution}),
            streets   = L.tileLayer(mapboxUrl, {id: 'MapID', attribution: mapboxAttribution});

        var map = L.map('map', {
            center: [39.73, -104.99],
            zoom: 10,
            layers: [grayscale, cities]
        });*/


/*

        var district=L.geoJson(population).addTo(mymap).bindPopup(function (layer) {
            return layer.feature.properties.DISTRICT;

        });

        L.geoJson(population).addTo(mymap).bindPopup(function (layer) {
            return layer.feature.properties.total;

        });

        var types = ['name','district','total']; // etc.
        // add an empty layer control to the map
        var layerControl = L.control.layers().addTo(mymap);

        // iterate over types, filter by that type, and format the layer for that feature type
        types.forEach(function(type) {
            var layer = L.geoJson(dtr_points, {
                filter: function(feature, layer) {
                    return feature.properties == type;
                },
                onEachFeature: function(feature, layer) {
                    var link_url = "<a href='" + feature.properties.Link + "' target='_blank'>" + feature.properties.Name + "</a>"
                    layer.bindPopup(link_url);
                    // I don't see any L.icons in your example, but following what you have:
                    layer.setIcon(type);
                }
            }
            // all done with the layer, add it to the control
            layerControl.addOverlay(layer, type);

        });




*/



        //For api calls
        /*     xhr = new XMLHttpRequest();
            xhr.open('GET', 'nepal.geojson');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.onload = function() {
                if (xhr.status === 200) {
                    L.geoJSON(JSON.parse(xhr.responseText)).addTo(mymap);
                }
            };
            xhr.send();*/


    </script>
--}}
@endsection
