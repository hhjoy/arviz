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
      };var element = document.getElementById("d5fe7270-ec67-4cfb-93aa-841f34403b70");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'd5fe7270-ec67-4cfb-93aa-841f34403b70' but no matching script tag was found. ")
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
                    
                  var docs_json = '{&quot;8ed1c34b-f489-4ec0-8ce7-75dfe2233eaa&quot;:{&quot;roots&quot;:{&quot;references&quot;:[{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;54488&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;54429&quot;}},&quot;id&quot;:&quot;54428&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54440&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54515&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{&quot;children&quot;:[{&quot;id&quot;:&quot;54419&quot;},{&quot;id&quot;:&quot;54449&quot;}]},&quot;id&quot;:&quot;54498&quot;,&quot;type&quot;:&quot;Row&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;54502&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54433&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;54462&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;54465&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54452&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54469&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_alpha&quot;:{&quot;value&quot;:0.1},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;line_alpha&quot;:{&quot;value&quot;:0.1},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;54481&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;54507&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;54463&quot;}},&quot;id&quot;:&quot;54462&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54511&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;54428&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;54431&quot;},{&quot;id&quot;:&quot;54435&quot;},{&quot;id&quot;:&quot;54491&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;54432&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;54482&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;54485&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;54442&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;54420&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;54424&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;54422&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;54426&quot;}},&quot;id&quot;:&quot;54419&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54466&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;54479&quot;}},&quot;id&quot;:&quot;54483&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{&quot;items&quot;:[{&quot;id&quot;:&quot;54492&quot;}]},&quot;id&quot;:&quot;54491&quot;,&quot;type&quot;:&quot;Legend&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54439&quot;,&quot;type&quot;:&quot;SaveTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54467&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54463&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54459&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;54493&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;54494&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;54495&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;54497&quot;}},&quot;id&quot;:&quot;54496&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54514&quot;,&quot;type&quot;:&quot;Selection&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;54516&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54471&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;source&quot;:{&quot;id&quot;:&quot;54493&quot;}},&quot;id&quot;:&quot;54497&quot;,&quot;type&quot;:&quot;CDSView&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54509&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;54458&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;54461&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54488&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54429&quot;,&quot;type&quot;:&quot;BasicTicker&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54470&quot;,&quot;type&quot;:&quot;ResetTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54512&quot;,&quot;type&quot;:&quot;UnionRenderers&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54507&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54422&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;54509&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;54459&quot;}},&quot;id&quot;:&quot;54458&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;54466&quot;},{&quot;id&quot;:&quot;54467&quot;},{&quot;id&quot;:&quot;54468&quot;},{&quot;id&quot;:&quot;54469&quot;},{&quot;id&quot;:&quot;54470&quot;},{&quot;id&quot;:&quot;54471&quot;}]},&quot;id&quot;:&quot;54472&quot;,&quot;type&quot;:&quot;Toolbar&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54450&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;bottom_units&quot;:&quot;screen&quot;,&quot;fill_alpha&quot;:0.5,&quot;fill_color&quot;:&quot;lightgrey&quot;,&quot;left_units&quot;:&quot;screen&quot;,&quot;level&quot;:&quot;overlay&quot;,&quot;line_alpha&quot;:1.0,&quot;line_color&quot;:&quot;black&quot;,&quot;line_dash&quot;:[4,4],&quot;line_width&quot;:2,&quot;render_mode&quot;:&quot;css&quot;,&quot;right_units&quot;:&quot;screen&quot;,&quot;top_units&quot;:&quot;screen&quot;},&quot;id&quot;:&quot;54490&quot;,&quot;type&quot;:&quot;BoxAnnotation&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;x&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]},&quot;y&quot;:{&quot;__ndarray__&quot;:&quot;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&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[200]}},&quot;selected&quot;:{&quot;id&quot;:&quot;54514&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;54515&quot;}},&quot;id&quot;:&quot;54493&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54426&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54456&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54454&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;label&quot;:{&quot;value&quot;:&quot;Poisson&quot;},&quot;renderers&quot;:[{&quot;id&quot;:&quot;54482&quot;}]},&quot;id&quot;:&quot;54492&quot;,&quot;type&quot;:&quot;LegendItem&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;54428&quot;},&quot;ticker&quot;:null},&quot;id&quot;:&quot;54431&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{&quot;line_alpha&quot;:0.1,&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;54495&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54420&quot;,&quot;type&quot;:&quot;DataRange1d&quot;},{&quot;attributes&quot;:{&quot;line_color&quot;:&quot;red&quot;,&quot;x&quot;:{&quot;field&quot;:&quot;x&quot;},&quot;y&quot;:{&quot;field&quot;:&quot;y&quot;}},&quot;id&quot;:&quot;54494&quot;,&quot;type&quot;:&quot;Line&quot;},{&quot;attributes&quot;:{&quot;data&quot;:{&quot;left&quot;:[0,1,2,3,4,5,6,7,8,9,10,11,12],&quot;right&quot;:[1,2,3,4,5,6,7,8,9,10,11,12,13],&quot;top&quot;:{&quot;__ndarray__&quot;:&quot;Gy/dJAaBlT8730+Nl26yP1CNl24Sg8A/Vg4tsp3vxz9CYOXQItvJP9v5fmq8dMM/gZVDi2znuz+cxCCwcmixPzvfT42XbqI/eekmMQisjD956SYxCKx8PwAAAAAAAAAA+n5qvHSTaD8=&quot;,&quot;dtype&quot;:&quot;float64&quot;,&quot;shape&quot;:[13]}},&quot;selected&quot;:{&quot;id&quot;:&quot;54511&quot;},&quot;selection_policy&quot;:{&quot;id&quot;:&quot;54512&quot;}},&quot;id&quot;:&quot;54479&quot;,&quot;type&quot;:&quot;ColumnDataSource&quot;},{&quot;attributes&quot;:{&quot;text&quot;:&quot;&quot;},&quot;id&quot;:&quot;54485&quot;,&quot;type&quot;:&quot;Title&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;54516&quot;}},&quot;id&quot;:&quot;54468&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;data_source&quot;:{&quot;id&quot;:&quot;54479&quot;},&quot;glyph&quot;:{&quot;id&quot;:&quot;54480&quot;},&quot;hover_glyph&quot;:null,&quot;muted_glyph&quot;:null,&quot;nonselection_glyph&quot;:{&quot;id&quot;:&quot;54481&quot;},&quot;selection_glyph&quot;:null,&quot;view&quot;:{&quot;id&quot;:&quot;54483&quot;}},&quot;id&quot;:&quot;54482&quot;,&quot;type&quot;:&quot;GlyphRenderer&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54437&quot;,&quot;type&quot;:&quot;WheelZoomTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54441&quot;,&quot;type&quot;:&quot;HelpTool&quot;},{&quot;attributes&quot;:{&quot;formatter&quot;:{&quot;id&quot;:&quot;54486&quot;},&quot;ticker&quot;:{&quot;id&quot;:&quot;54433&quot;}},&quot;id&quot;:&quot;54432&quot;,&quot;type&quot;:&quot;LinearAxis&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54424&quot;,&quot;type&quot;:&quot;LinearScale&quot;},{&quot;attributes&quot;:{&quot;axis&quot;:{&quot;id&quot;:&quot;54432&quot;},&quot;dimension&quot;:1,&quot;ticker&quot;:null},&quot;id&quot;:&quot;54435&quot;,&quot;type&quot;:&quot;Grid&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54436&quot;,&quot;type&quot;:&quot;PanTool&quot;},{&quot;attributes&quot;:{},&quot;id&quot;:&quot;54486&quot;,&quot;type&quot;:&quot;BasicTickFormatter&quot;},{&quot;attributes&quot;:{&quot;overlay&quot;:{&quot;id&quot;:&quot;54490&quot;}},&quot;id&quot;:&quot;54438&quot;,&quot;type&quot;:&quot;BoxZoomTool&quot;},{&quot;attributes&quot;:{&quot;bottom&quot;:{&quot;value&quot;:0},&quot;fill_color&quot;:{&quot;value&quot;:&quot;black&quot;},&quot;left&quot;:{&quot;field&quot;:&quot;left&quot;},&quot;right&quot;:{&quot;field&quot;:&quot;right&quot;},&quot;top&quot;:{&quot;field&quot;:&quot;top&quot;}},&quot;id&quot;:&quot;54480&quot;,&quot;type&quot;:&quot;Quad&quot;},{&quot;attributes&quot;:{&quot;below&quot;:[{&quot;id&quot;:&quot;54458&quot;}],&quot;center&quot;:[{&quot;id&quot;:&quot;54461&quot;},{&quot;id&quot;:&quot;54465&quot;}],&quot;left&quot;:[{&quot;id&quot;:&quot;54462&quot;}],&quot;output_backend&quot;:&quot;webgl&quot;,&quot;plot_height&quot;:500,&quot;plot_width&quot;:500,&quot;renderers&quot;:[{&quot;id&quot;:&quot;54496&quot;}],&quot;title&quot;:{&quot;id&quot;:&quot;54502&quot;},&quot;toolbar&quot;:{&quot;id&quot;:&quot;54472&quot;},&quot;x_range&quot;:{&quot;id&quot;:&quot;54450&quot;},&quot;x_scale&quot;:{&quot;id&quot;:&quot;54454&quot;},&quot;y_range&quot;:{&quot;id&quot;:&quot;54452&quot;},&quot;y_scale&quot;:{&quot;id&quot;:&quot;54456&quot;}},&quot;id&quot;:&quot;54449&quot;,&quot;subtype&quot;:&quot;Figure&quot;,&quot;type&quot;:&quot;Plot&quot;},{&quot;attributes&quot;:{&quot;active_drag&quot;:&quot;auto&quot;,&quot;active_inspect&quot;:&quot;auto&quot;,&quot;active_multi&quot;:null,&quot;active_scroll&quot;:&quot;auto&quot;,&quot;active_tap&quot;:&quot;auto&quot;,&quot;tools&quot;:[{&quot;id&quot;:&quot;54436&quot;},{&quot;id&quot;:&quot;54437&quot;},{&quot;id&quot;:&quot;54438&quot;},{&quot;id&quot;:&quot;54439&quot;},{&quot;id&quot;:&quot;54440&quot;},{&quot;id&quot;:&quot;54441&quot;}]},&quot;id&quot;:&quot;54442&quot;,&quot;type&quot;:&quot;Toolbar&quot;}],&quot;root_ids&quot;:[&quot;54498&quot;]},&quot;title&quot;:&quot;Bokeh Application&quot;,&quot;version&quot;:&quot;2.0.0&quot;}}';
                  var render_items = [{"docid":"8ed1c34b-f489-4ec0-8ce7-75dfe2233eaa","root_ids":["54498"],"roots":{"54498":"d5fe7270-ec67-4cfb-93aa-841f34403b70"}}];
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