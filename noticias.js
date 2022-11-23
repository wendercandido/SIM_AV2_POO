class jornalista{
    constructor(wilian,foto){
        this.wilian=wilian;
        this.foto=foto;
    }
    noticia(){
        console.log('tirando a foto......');
    }
    
}

class jornalista extends noticia{
    analisar(){
        console.log('analisando a copa...'); 
    }

}
class analisarnoticias extends jornalista{
    analisarnoticias(){
        super.noticias1(); 
        console.log('noticiando....');    
    } 
    

}

const jornalista= new noticia();
const analisarnoticias = new noticias1();
noticias1.jornalista();