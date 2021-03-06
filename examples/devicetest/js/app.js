
/* Game namespace */
var game = {
    // Run on page load.
    onload: function () {
        // Initialize the video.
        if (!me.video.init(480, 320, {scale : "auto"})) {
            alert("Your browser does not support HTML5 canvas.");
            return;
        }

        me.device.watchDeviceOrientation();
        me.device.watchAccelerometer();

        // clear the background
        me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);

        var DeviceInfo = me.Renderable.extend({
            init: function() {
                this._super(me.Renderable, "init", [0, 0, 100, 200]);
                this.font = new me.Font("arial", "24px", "white");
                this.anchorPoint.set(0, 0);
            },
            update: function() {
                return true;
            },
            draw: function(renderer) {
                this.font.draw(renderer, "Gamma: " + me.device.gamma, 10, 0);
                this.font.draw(renderer, "Beta: " + me.device.beta, 10, 30);
                this.font.draw(renderer, "Alpha: " + me.device.alpha, 10, 60);
                this.font.draw(renderer, "X: " + me.device.accelerationX, 10, 90);
                this.font.draw(renderer, "Y: " + me.device.accelerationY, 10, 120);
                this.font.draw(renderer, "Z: " + me.device.accelerationZ, 10, 150);
                this.font.draw(renderer, "orientation: " + me.device.getScreenOrientation(), 10, 180);
            }
        });

        // renderable to display device information
        me.game.world.addChild(new DeviceInfo(), 1);
    }
};
