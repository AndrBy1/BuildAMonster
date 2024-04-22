class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 300;

        this.SmileKey = null;
        this.FangKey = null;
        this.LeftKey = null;
        this.RightKey = null;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redF.png");
        my.sprite.head = this.add.sprite(this.bodyX, this.bodyY - 140, "monsterParts", "body_whiteC.png");
        my.sprite.rightleg = this.add.sprite(this.bodyX + 60, this.bodyY + 150, "monsterParts", "leg_yellowC.png");
        my.sprite.leftleg = this.add.sprite(this.bodyX - 60, 450, "monsterParts", "leg_yellowC.png");
        my.sprite.leftleg.flipX = true;
        my.sprite.rightArm1 = this.add.sprite(this.bodyX + 100, this.bodyY + 10, "monsterParts", "arm_whiteC.png");
        my.sprite.leftArm1 = this.add.sprite(this.bodyX  - 100, this.bodyY + 10, "monsterParts", "arm_whiteC.png");
        my.sprite.leftArm1.flipX = true;
        my.sprite.eye1 = this.add.sprite(this.bodyX + 50, this.bodyY - 140, "monsterParts", "eye_red.png");
        my.sprite.eye2 = this.add.sprite(this.bodyX - 50, this.bodyY - 140, "monsterParts", "eye_red.png");
        my.sprite.eye2.flipX = true;
        my.sprite.eye3 = this.add.sprite(this.bodyX, this.bodyY - 195, "monsterParts", "eye_psycho_dark.png");
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY - 80, "monsterParts", "mouth_closed_happy.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY - 80, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;

        this.SmileKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.FangKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.LeftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.RightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(Phaser.Input.Keyboard.JustDown(this.SmileKey)){
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
        }
        if(Phaser.Input.Keyboard.JustDown(this.FangKey)){
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
        }

        if(Phaser.Input.Keyboard.JustDown(this.LeftKey)){
            my.sprite.body.x -= 10;
            my.sprite.head.x -= 10;
            my.sprite.rightleg.x -= 10;
            my.sprite.leftleg.x -= 10;
            my.sprite.rightArm1.x -= 10;
            my.sprite.leftArm1.x -= 10;
            my.sprite.eye1.x -= 10;
            my.sprite.eye2.x -= 10;
            my.sprite.eye3.x -= 10;
            my.sprite.smile.x -= 10;
            my.sprite.fangs.x -= 10;

        }
        if(Phaser.Input.Keyboard.JustDown(this.RightKey)){
            my.sprite.body.x += 10;
            my.sprite.head.x += 10;
            my.sprite.rightleg.x += 10;
            my.sprite.leftleg.x += 10;
            my.sprite.rightArm1.x += 10;
            my.sprite.leftArm1.x += 10;
            my.sprite.eye1.x += 10;
            my.sprite.eye2.x += 10;
            my.sprite.eye3.x += 10;
            my.sprite.smile.x += 10;
            my.sprite.fangs.x += 10;
        }
    }

}
