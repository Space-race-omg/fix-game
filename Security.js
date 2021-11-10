const accessCode1 = "HOLE";
const accessCode2 = "NOON";

class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(680,550);
        this.access1.style('background', 'white');  
        this.access1.visible = false;

        this.button1 = createButton('Check');
        this.button1.position(730,580);
        this.button1.style('background', 'lightgrey');    
        this.button1.visible = false;

        //this.access2 = createInput("Code1")
        //this.access2.position(700,190);
        //this.access2.style('background', 'white');  

        //this.button2 = createButton('Check');
        //this.button2.position(700,220);
        //this.button2.style('background', 'lightgrey');
    }

   // forInvisibility()

    forVisibility()
    {
        this.access1.visible = true;
        this.button1.visible = true;
    }

    display(){

        this.forVisibility();

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                nextButton.hide();
                note.addImage(note3)
            }
        });

        //this.button2.mousePressed(() => {
           // if(system.authenticate(accessCode2,this.access2.value())){
           //     this.button2.hide();
            //    this.access2.hide();
            //    score++;
         //   }
       // });

    }
}