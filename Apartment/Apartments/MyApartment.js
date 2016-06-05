function MyApartment() {
    var myHairdryer = HairdryerBabyliss6000E;
    var myKettle = KettleScarlettEK18P2;
    var myLampKitchen = LampGloboET5837;
    var myLampRoom = LampIkeaVarv;
    var myLaptop = LaptopAcerES1520;
    var myMicrowave = MicrowaveSamsungGE93K;
    var myTV = TVLG32LF56;
    var myWasher = WasherAEGL59869;
    myHairdryer.setOn();
    myKettle.setOn();
    myTV.setOn();
    
    var myKitchen = new Kitchen('MyKitchen', [myMicrowave, myKettle, myLampKitchen]);
    var myBathroom = new Bathroom('MyBathroom', [myHairdryer, myWasher]);
    var myLivingroom = new LivingRoom('MyLivingRoom', [myTV, myLaptop, myLampRoom]);
    
    Apartment.call(this, '4 Nikulina St., Apt. 77', [myKitchen, myBathroom, myLivingroom]);
}

MyApartment.prototype = Object.create(Apartment.prototype);