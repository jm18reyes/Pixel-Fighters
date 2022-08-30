import { BehaviorSubject } from "rxjs";
import { SKINS } from "./constants";


export class CharacterSelectionService{

    characterSelected!:any;
    characterSelectedObservable = new BehaviorSubject<any>([]);

    enemyCharacter:any = SKINS.CYBORG;
    constructor(){
        /*
        this.characterSelectedObservable.subscribe(value =>{
            console.log(`characterSelected: ${this.characterSelected}`);
            this.characterSelected = value;
        });
        */
    }

    getCharacterSelected(){
        this.characterSelected = sessionStorage.getItem('characterSelected');
        console.log(`character: ${this.characterSelected}`);
        this.characterSelected = JSON.parse(this.characterSelected) || SKINS.BIKER;
        return this.characterSelected;
    }

    setCharacterSelected(skin:any){
       
        console.log(`skin: ${skin.CHARACTER}`);
        this.characterSelected = skin;
        
        sessionStorage.setItem('characterSelected',JSON.stringify(this.characterSelected));

    }

    getEnemyCharacter(){
        return this.enemyCharacter;
    }
    
    setEnemyCharacter(character:any){
        this.enemyCharacter = character;
    }
}