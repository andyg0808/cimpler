exports.init = function(config, cimpler) {
   this.config = config;
   cimpler.consumeBuild(function(build, finished) {
      console.log("Starting Build");
      setTimeout(function() {
         console.dir(build);
         build.status = 'success';
         finished();
      }, 20000);
   });
};
