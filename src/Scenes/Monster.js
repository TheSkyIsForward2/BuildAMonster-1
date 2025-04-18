class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
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

        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.rightArm = this.add.sprite(this.bodyX + 100, this.bodyY + 40, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm = this.add.sprite(this.bodyX - 100, this.bodyY + 40, "monsterParts", "arm_blueA.png");
        my.sprite.leftArm.flipX = true;

        my.sprite.rightLeg = this.add.sprite(this.bodyX +50, this.bodyY + 150, "monsterParts", "leg_redA.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX -50, this.bodyY + 150, "monsterParts", "leg_redA.png");
        my.sprite.leftLeg.flipX = true;

        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY-20, "monsterParts", "eye_red.png");
        
        my.sprite.mouthsmile = this.add.sprite(this.bodyX, this.bodyY + 30, "monsterParts", "mouthA.png");
        my.sprite.mouthbared = this.add.sprite(this.bodyX, this.bodyY + 30, "monsterParts", "mouthB.png");
        my.sprite.mouthbared.visible = false;
     
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
    
         // Polling input: walk left
        if(this.aKey.isDown){
            for(const elem in this.my.sprite){
                my.sprite[elem].x -= 2;
            }
        }
        // Polling input: walk right
        if(this.dKey.isDown){
            for(const elem in this.my.sprite){
                my.sprite[elem].x += 2;
            }
        }
    
        // Event Handling: smile
        if(Phaser.Input.Keyboard.JustDown(this.sKey)){
            my.sprite.mouthsmile.visible = true;
            my.sprite.mouthbared.visible = false;
            
        }

        // Event Handling: fangs
        if(Phaser.Input.Keyboard.JustDown(this.fKey)){
            my.sprite.mouthsmile.visible = false;
            my.sprite.mouthbared.visible = true;
        }
        
    }

}