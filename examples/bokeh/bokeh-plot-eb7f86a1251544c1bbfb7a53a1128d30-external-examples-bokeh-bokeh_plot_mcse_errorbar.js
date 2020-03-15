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
      };var element = document.getElementById("e0b4afbc-4d80-4d54-9b49-f05cd869dc63");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'e0b4afbc-4d80-4d54-9b49-f05cd869dc63' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;b87e42b9-64d5-458d-8073-793bc10eeb46&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75008&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;CYbuhHPkqT+LcnLXB9ewP/KkEhFsBrQ/IT9rZHwutj+EjbMpDAm4PygLaZJ6jrk/Oi0O8h7cuj9Rx9cD/VO8P4AhAEoAe70/UYOSOM6/vj/uruxhTPe/P4qoqX8eysA/T0AyISxwwT+nT7pSLxvCP6Bue4uEBsM/YZ6mwY/7wz8sODplj/3EP4xHXLuWQ8Y/koaxlaG/xz+0O1/9337KPw==&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[20]}},&quot;selected&quot;:{&quot;id&quot;:&quot;75045&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;75046&quot;}},&quot;id&quot;:&quot;75028&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;75028&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;75029&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;75030&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;75032&quot;}},&quot;id&quot;:&quot;75031&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;xs&quot;:[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],&quot;ys&quot;:[[0.03772778497686324,0.06341435441411682],[0.048609960988271056,0.08295225309898624],[0.06153599604134034,0.09490999198083684],[0.07329044599237555,0.1000031913144879],[0.08263983048641552,0.1051362776469015],[0.0903540597070716,0.1093065480976247],[0.09699223710421645,0.11285031907778881],[0.10362105601890598,0.11769206470520818],[0.10944498910150591,0.12087120746704239],[0.11473656737082852,0.12549187350823154],[0.11869566056318977,0.13103878673936042],[0.12529589160671384,0.1370404814083397],[0.1312653674053737,0.14120609142856455],[0.13596314056127606,0.14694609137693881],[0.14241124076490258,0.15486157132792017],[0.1498693638921837,0.1623597345347899],[0.1580204612689074,0.16995562139453518],[0.1675166004173108,0.18035869233133667],[0.17835199430027804,0.19271924534760554],[0.19922327755189467,0.21477055544981277]]},&quot;selected&quot;:{&quot;id&quot;:&quot;75047&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;75048&quot;}},&quot;id&quot;:&quot;75033&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;75049&quot;}},&quot;id&quot;:&quot;75013&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75043&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;Quantile&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;75043&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;75004&quot;}},&quot;id&quot;:&quot;75003&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;75007&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;75010&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75012&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;xs_units&quot;:&quot;screen&quot;,&quot;ys_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;75050&quot;,&quot;type&quot;:&quot;PolyAnnotation&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;75033&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;75034&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;75035&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;75037&quot;}},&quot;id&quot;:&quot;75036&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;75050&quot;}},&quot;id&quot;:&quot;75015&quot;,&quot;type&quot;:&quot;LassoSelectTool&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;75011&quot;},{&quot;id&quot;:&quot;75012&quot;},{&quot;id&quot;:&quot;75013&quot;},{&quot;id&quot;:&quot;75014&quot;},{&quot;id&quot;:&quot;75015&quot;},{&quot;id&quot;:&quot;75016&quot;},{&quot;id&quot;:&quot;75017&quot;},{&quot;id&quot;:&quot;75018&quot;}]},&quot;id&quot;:&quot;75019&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;75003&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;75006&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;callback&quot;:null},&quot;id&quot;:&quot;75018&quot;,&quot;type&quot;:&quot;HoverTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75017&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;75030&quot;,&quot;type&quot;:&quot;Dash&quot;},{&quot;attributes&quot;:{&quot;axis_label&quot;:&quot;Value $\\\\pm$ MCSE for quantiles&quot;,&quot;formatter&quot;:{&quot;id&quot;:&quot;75041&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;75008&quot;}},&quot;id&quot;:&quot;75007&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;75028&quot;}},&quot;id&quot;:&quot;75032&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;xs&quot;:{&quot;field&quot;:&quot;xs&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;ys&quot;}},&quot;id&quot;:&quot;75034&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;75033&quot;}},&quot;id&quot;:&quot;75037&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;toolbars&quot;:[{&quot;id&quot;:&quot;75019&quot;}],&quot;tools&quot;:[{&quot;id&quot;:&quot;75011&quot;},{&quot;id&quot;:&quot;75012&quot;},{&quot;id&quot;:&quot;75013&quot;},{&quot;id&quot;:&quot;75014&quot;},{&quot;id&quot;:&quot;75015&quot;},{&quot;id&quot;:&quot;75016&quot;},{&quot;id&quot;:&quot;75017&quot;},{&quot;id&quot;:&quot;75018&quot;}]},&quot;id&quot;:&quot;75053&quot;,&quot;type&quot;:&quot;ProxyToolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75045&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;xs&quot;:{&quot;field&quot;:&quot;xs&quot;},&quot;ys&quot;:{&quot;field&quot;:&quot;ys&quot;}},&quot;id&quot;:&quot;75035&quot;,&quot;type&quot;:&quot;MultiLine&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;74995&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75046&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[[{&quot;id&quot;:&quot;74994&quot;},0,0]]},&quot;id&quot;:&quot;75052&quot;,&quot;type&quot;:&quot;GridBox&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;sigma_a&quot;},&quot;id&quot;:&quot;75038&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;fill_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;line_color&quot;:{&quot;value&quot;:&quot;#1f77b4&quot;},&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;75029&quot;,&quot;type&quot;:&quot;Dash&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75011&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75004&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;toolbar&quot;:{&quot;id&quot;:&quot;75053&quot;},&quot;toolbar_location&quot;:&quot;above&quot;},&quot;id&quot;:&quot;75054&quot;,&quot;type&quot;:&quot;ToolbarBox&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75047&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;75003&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;75006&quot;},{&quot;id&quot;:&quot;75010&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;75007&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:288,&quot;plot_width&quot;:432,&quot;renderers&quot;:[{&quot;id&quot;:&quot;75031&quot;},{&quot;id&quot;:&quot;75036&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;75038&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;75019&quot;},&quot;toolbar_location&quot;:null,&quot;x_range&quot;:{&quot;id&quot;:&quot;74995&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;74999&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;74997&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;75001&quot;}},&quot;id&quot;:&quot;74994&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75048&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75014&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75016&quot;,&quot;type&quot;:&quot;UndoTool&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;75054&quot;},{&quot;id&quot;:&quot;75052&quot;}]},&quot;id&quot;:&quot;75055&quot;,&quot;type&quot;:&quot;Column&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75041&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;74999&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;74997&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;75001&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;75049&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;}],&quot;root_ids&quot;:[&quot;75055&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.0&quot;}}';
                  var render_items = [{"docid":"b87e42b9-64d5-458d-8073-793bc10eeb46","root_ids":["75055"],"roots":{"75055":"e0b4afbc-4d80-4d54-9b49-f05cd869dc63"}}];
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