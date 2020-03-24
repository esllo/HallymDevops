window.Animator = new (function() {
  this.name = 'ANMT';
  this.el = [];
  this.els = [];
  this.size = { width: 0, height: 0 };
  this.updateSize = function() {
    this.size = {
      width: (window.innerWidth || document.documentElement.clientWidth) / 2,
      height: (window.innerHeight || document.documentElement.clientHeight) / 2,
    };
    this.updateRequest();
  }.bind(this);
  this.updateElements = function() {
    this.el = document.getElementsByClassName('anim');
    this.els = document.querySelector('*[fix-after]');
    if (this.el == null) this.el = [];
    if (this.els == null) this.els = [];
    if (this.els.length === undefined) this.els = [this.els];
    // window.Animator && 'ANMT' == window.Animator.name
    //   ? window.Animator.mouseListener()
    //   : this.mouseListener();
  };
  this.updateRequest = function() {
    window.Animator &&
      'ANMT' == window.Animator.name &&
      setTimeout(function() {
        window.Animator.updateElements.call(window.Animator);
        window.Animator.mouseListener.call(window.Animator);
      }, 100);
  };
  this.check = function(e) {
    for (
      var t = e.offsetTop,
        i = e.offsetLeft,
        n = e.offsetWidth,
        o = e.offsetHeight;
      e.offsetParent;

    )
      (t += (e = e.offsetParent).offsetTop), (i += e.offsetLeft);
    return (
      t < window.pageYOffset + window.innerHeight &&
      i < window.pageXOffset + window.innerWidth &&
      t + o > window.pageYOffset &&
      i + n > window.pageXOffset
    );
  };
  this.mouseListener = function() {
    obj =
      (window.Animator && 'ANMT' == window.Animator.name)
        ? window.Animator
        : this;

    obj.updateElements();
    el = obj.el;
    els = obj.els;
    for (i = 0; i < el.length; i++)
      (elem = el[i]),
        obj.check(elem)
          ? elem.classList.contains('active') || elem.classList.add('active')
          : elem.classList.contains('loop') && elem.classList.remove('active');
    for (i = 0; i < els.length; i++) {
      elem = els[i];
      fixwith = document.querySelector(elem.getAttribute('fix-with', ''));
      value = elem.getAttribute('fix-after', 0);
      if (value < window.pageYOffset) {
        if (!elem.classList.contains('fixed')) elem.classList.add('fixed');
        if (!fixwith.classList.contains('fixed'))
          fixwith.classList.add('fixed');
      } else {
        if (elem.classList.contains('fixed')) elem.classList.remove('fixed');
        if (fixwith.classList.contains('fixed'))
          fixwith.classList.remove('fixed');
      }
    }
  }.bind(this);
  window.addEventListener('scroll', this.mouseListener);
  window.addEventListener('resize', this.updateSize.bind(this));
  this.updateSize();
  this.updateElements();
})();
