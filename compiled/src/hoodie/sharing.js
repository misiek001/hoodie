// Generated by CoffeeScript 1.3.1

define('hoodie/sharing', ['hoodie/sharing/instance'], function(SharingInstance) {
  var Sharing;
  return Sharing = (function() {

    Sharing.name = 'Sharing';

    function Sharing(hoodie) {
      this.hoodie = hoodie;
    }

    Sharing.prototype.create = function(options) {
      var sharing;
      if (options == null) {
        options = {};
      }
      sharing = new SharingInstance(this.hoodie, options);
      return sharing.create();
    };

    Sharing.prototype.destroy = function(id) {
      return this.hoodie.store.destroy("$sharing", id);
    };

    Sharing.prototype["delete"] = Sharing.prototype.destroy;

    return Sharing;

  })();
});
