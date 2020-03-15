(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("6c80af47-b315-42b1-88da-b366d0cce81f");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6c80af47-b315-42b1-88da-b366d0cce81f' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.0.0.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-gl-2.0.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{&quot;76cbced2-878e-4bc4-8103-85f454ecffed&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;79972&quot;},{&quot;id&quot;:&quot;79970&quot;}]},&quot;id&quot;:&quot;79973&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79965&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79938&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;79944&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79925&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;79963&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;79930&quot;}},&quot;id&quot;:&quot;79929&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79966&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;79971&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;79972&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79963&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;79929&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;79932&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79923&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;79968&quot;}},&quot;id&quot;:&quot;79941&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;79929&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;79932&quot;},{&quot;id&quot;:&quot;79936&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;79933&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:288,&quot;plot_width&quot;:432,&quot;renderers&quot;:[{&quot;id&quot;:&quot;79956&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;79958&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;79945&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;79921&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;79925&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;79923&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;79927&quot;}},&quot;id&quot;:&quot;79920&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79940&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;79968&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;centered model - non centered model&quot;},&quot;id&quot;:&quot;79958&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79930&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;ELPD difference&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;79961&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;79934&quot;}},&quot;id&quot;:&quot;79933&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;79920&quot;},0,0]]},&quot;id&quot;:&quot;79970&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;79955&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;79954&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;79957&quot;}},&quot;id&quot;:&quot;79956&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;79933&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;79936&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;sizes&quot;:{&quot;__ndarray__&quot;:&quot;AAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQAAAAAAAABhAAAAAAAAAGEAAAAAAAAAYQA==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[8]},&quot;xdata&quot;:[0,1,2,3,4,5,6,7],&quot;ydata&quot;:{&quot;__ndarray__&quot;:&quot;gA887TQjqb8AatEMjdaMvwDAoFmzDUE/AIcKht05k7+A2X/x9IekPwDgrH2oaFM/ANQFB3wcsb8Am1vpFXuQvw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[8]}},&quot;selected&quot;:{&quot;id&quot;:&quot;79965&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;79966&quot;}},&quot;id&quot;:&quot;79955&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79934&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;79945&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;79937&quot;},{&quot;id&quot;:&quot;79938&quot;},{&quot;id&quot;:&quot;79939&quot;},{&quot;id&quot;:&quot;79940&quot;},{&quot;id&quot;:&quot;79941&quot;},{&quot;id&quot;:&quot;79942&quot;},{&quot;id&quot;:&quot;79943&quot;},{&quot;id&quot;:&quot;79944&quot;}]},&quot;id&quot;:&quot;79971&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79921&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;79967&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;79955&quot;}},&quot;id&quot;:&quot;79957&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79927&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79943&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;79937&quot;},{&quot;id&quot;:&quot;79938&quot;},{&quot;id&quot;:&quot;79939&quot;},{&quot;id&quot;:&quot;79940&quot;},{&quot;id&quot;:&quot;79941&quot;},{&quot;id&quot;:&quot;79942&quot;},{&quot;id&quot;:&quot;79943&quot;},{&quot;id&quot;:&quot;79944&quot;}]},&quot;id&quot;:&quot;79945&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79937&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79961&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;79967&quot;}},&quot;id&quot;:&quot;79939&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;size&quot;:{&quot;field&quot;:&quot;sizes&quot;,&quot;units&quot;:&quot;screen&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;xdata&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;ydata&quot;}},&quot;id&quot;:&quot;79954&quot;,&quot;type&quot;:&quot;Cross&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;79942&quot;,&quot;type&quot;:&quot;UndoTool&quot;}],&quot;root_ids&quot;:[&quot;79973&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.0&quot;}}';
                  var render_items = [{"docid":"76cbced2-878e-4bc4-8103-85f454ecffed","root_ids":["79973"],"roots":{"79973":"6c80af47-b315-42b1-88da-b366d0cce81f"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();