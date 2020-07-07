AFRAME.registerComponent('boat', {
  keysDown: {},
  init() {
    this.setupEventListeners();
    this.center = new CANNON.Vec3(0, 0, 0);
    this.mastCenter = new CANNON.Vec3(0, 3, 0);
    this.force = new CANNON.Vec3(4, 0, 0);
    this.mast = document.getElementById('boat-mast');

    this.el.sceneEl.addEventListener('loaded', () => {
      this.el.body.angularDamping = 0.9;
      this.el.body.linearDamping = 0.9;
    });
  },
  tick(_, dt) {
    //this.el.body.applyLocalForce(this.force, this.el.body.position);
    this.el.body.applyLocalForce(this.force.clone().mult(1), this.mastCenter);

    window.asd = this;
  },

  setupEventListeners() {
    globalThis.addEventListener('keydown', (e) => {
      const key = e.key.toLowerCase();
      this.keysDown[key] = true;
    });
    globalThis.addEventListener('keyup', (e) => {
      const key = e.key.toLowerCase();
      this.keysDown[key] = false;
    });
  },
});
