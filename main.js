const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
let currentQuestion ={};
let acceptingAnswers = false;
let score=0;
let questionCounter=0;
let availableQuestions=[];
let questions=[
    {
        question:'Care sunt cele 4 sisteme ce contribuie in desfasurarea functiei de nutritie?',
        choice1:'Respirator,circulator,locomotor si digestiv',
        choice2:'Excretor, respirator,circulator si digestiv',
        choice3:'Nervos, respirator, circulator si digestiv',
        choice4:'Muscular, respirator, digestiv si excretor',
        answer:2,
    },
    {
        question:'Ce sisteme asigura realizarea functiei locomotare?',
        choice1:'Sistem nervos si muscular',
        choice2:'Sistem nervos, muscular si osos',
        choice3:'Sistem muscular si osos',
        choice4:'Sistem nervos si circulator',
        answer:3,
    },
    {
        question:'Ce este anatomia?',
        choice1:'Stiinta ce se ocupa cu studiul functiilor anatomice',
        choice2:'Studiul functiilor structurilor corpului uman',
        choice3:'Stiinta ce se ocupa cu studiul anemiei',
        choice4:'Studiul structurilor corpului uman si organizarea acestora',
        answer:4,
    },
    {
        question:'Ce reprezinta fiziologia?',
        choice1:'studiul functiilor structurilor corpului uman',
        choice2:'studiul fizioterapiei',
        choice3:'studiul structurilor corpului uman',
        choice4:'studiul functiilor si structurilor corpului uman',
        answer:1,
    },
    {
        question:'Cu ce se ocupa citologia?',
        choice1:'studiul celulelor corpului uman si functiile acestora',
        choice2:'studiul tesuturilor, celulelor si organelor corpului uman la microscop',
        choice3:'se mai numeste si histologie si se ocupa cu studiul celulelor corpului uman',
        choice4:'studiul componentelor corpului uman la microscop',
        answer:1,
    },
    {
        question:'care este cel mai simplu nivel de organizare?',
        choice1:'Celula',
        choice2:'Anatomic',
        choice3:'Atom',
        choice4:'Molecula',
        answer:3,
    },
    {
        question:'Ce afirmatie referitoare la celula este corecta?',
        choice1:'este unitatea morfologica si functionala a tuturor organismelor vii',
        choice2:'este unitatea de masura a tuturor organismelor vii',
        choice3:'celulele corpului uman sunt procariote',
        choice4:'masoara 2-3 microni',
        answer:1,
    },
    {
        question:'care este nivelul final de organizare structurala?',
        choice1:'organismul',
        choice2:'corpul uman',
        choice3:'scheletul',
        choice4:'sistem de organe',
        answer:4,
    },
    {
        question:'metabolismul:',
        choice1:'reprezinta suma proceselor chimice ce mentin organismul in limita parametrilor normali',
        choice2:'este acumularea de materie din corp si mediu inconjurator',
        choice3:'reprezinta suma tuturor proceselor chimice din organismul uman',
        choice4:'toate cele anterioare',
        answer:3,
    },
    {
        question:'conductibilitatea:',
        choice1:'se refera la proprietatea tuturor celulelor de a raspunde la stimuli',
        choice2:'se refera la proprietatea unor celule de a raspunde la stimuli',
        choice3:'este prezenta doar la celulele nervoase si cele musculare',
        choice4:'sisteme de autoreglare prin care organismul produce un raspuns',
        answer:3,
    },
    {
        question:'afirmatia corecta privind reproducerea sunt:',
        choice1:'este de 2 feluri: pluricelulara si unicelulara',
        choice2:'poate fi dintre un ou fecundat si spermatoizi,numita asexuata',
        choice3:'are rol in procesele de reparatie,crestere si inlocuire a celulelor,fiind numita sexuata',
        choice4:'poate fi sexuata si asexuata',
        answer:4,
    },
    {
        question:'cand se afla organismul in homeostazie?',
        choice1:'cand nevoile celulelor sunt satisfacute si organismul se afla in limitele normale',
        choice2:'pierderea in cantitati mari a sangelui',
        choice3:'atunci cand suma tuturor proceselor chimice din organism este constanta ',
        choice4:'atunci cand organsimul primeste informatii din mediul inconjurator si stabileste un raspuns',
        answer:1,
    },
    {
        question:'cum se mentine organismul in homeostazie? ',
        choice1:'prin mecanisme de autoreglare,reprezentand mijlocul principal',
        choice2:'prin mecanisme de feedback:negativ si pozitiv',
        choice3:'prin reglarea anabolismului si catabolismului',
        choice4:'prin schimbul de materie si energie dintre corp si mediu inconjurator',
        answer:2,
    },
    {
        question:'cate cavitati are cavitatea toracica?',
        choice1:'2 cavitati: pleurala si pericardica',
        choice2:'2 cavitati: anterioara si posterioara',
        choice3:'3 cavitati: 2 pleurale si una pericardica',
        choice4:'6 regiuni',
        answer:3,
    },
    {
        question:'planul frontal:',
        choice1:'se mai numeste longitudinal',
        choice2:'imparte corpul in ventral si dorsal',
        choice3:'separa corpul in anterior si ventral',
        choice4:'se mai numeste coronar',
        answer:2,
    },
    {
        question:'cavitatea abdomino pelvina:',
        choice1:'are 6 regiuni si se mai numeste cavitate peritoneala',
        choice2:'se imparte in cavitate posterioara si anterioara',
        choice3:'este separata de cavitatea toracica de regiunea epigastrica si hipocondru',
        choice4:'se mai numeste cavitate peritoneala si are 9 regiuni',
        answer:4,
    },
    {
        question:'ce organe se afla in mediastin?',
        choice1:'timus,esofag,trahee,bronhii si vase de sange',
        choice2:'laringe,esofag,timus si rinchi',
        choice3:'plamani,inima,timus si esofag',
        choice4:'inima,timus,esofag,trahee,bronhii',
        answer:4,
    },
    {
        question:'ce organe se afla in hipocondrul drept?',
        choice1:'ficat,rinichi,plaman si coada pancreasului',
        choice2:'ficat,stomac,vezica biliara si splina',
        choice3:'ficat,rinichi si capul pancreasului',
        choice4:'ficat, stomac, bila si colonul ascendent',
        answer:3,
    },
    {
        question:'membranele seroase:',
        choice1:'sunt 4: pericard,pleura,peritoneu si endocard',
        choice2:'au 2 foite: una parietala si una viscerala',
        choice3:'secreta ser, cu rol lubrifiant',
        choice4:'acopera organele, cu rol lubrifiant',
        answer:2,
    },
    {
        question:'diafragma:',
        choice1:'este o membrana ce separa cavitatea toracica de cea abdominala',
        choice2:'este un muschi gasit in cavitatea toracica',
        choice3:'este un muschi cu orificii, ce separa cavitatea toracica de cea abdominala',
        choice4:'este muschi cu rol in respiratie si digestie',
        answer:3,
    },
    {
        question:'cavitatea posterioara:',
        choice1:'este formata din cavitatea ventrala si cea dorsala',
        choice2:'in ea se afla maduva spinarii,encefalul si rinichii',
        choice3:'se mai numeste si ventrala',
        choice4:'este formata din canal rahidian si cavitatea craniana',
        answer:4,
    },
    {
        question:'nucleotidele:',
        choice1:'sunt formate dintr-o baza azotata,radical fosfat si o molecula glucidica',
        choice2:'contin doar bazele azotate purinice si pirimidice',
        choice3:'se afla in componenta arn-ului',
        choice4:'sunt in numar de 30.000 intr-un nucleu',
        answer:1,
    },
    {
        question:'bazele azotate:',
        choice1:'sunt adenina citozina si guanina(purinice)',
        choice2:'sunt pirinice si pirimidinice',
        choice3:'cele pirimidinice sunt adenina,guanina si uracil',
        choice4:'adenina si timina se leaga printr-o legatura tripla de hidrogen',
        answer:2,
    },
    {
        question:'ADN-ul:',
        choice1:'are catena monocatenara dublu-helix si este compus din dezoxiriboza',
        choice2:'se gaseste in nucleu si citoplasma',
        choice3:'are catena bicatenara si este compus din dezoxiriboza',
        choice4:'are bazele pirimidinice guanina,timina si uracil',
        answer:3,
    },
    {
        question:'ce afirmatie este corecta cu privire la pH-ul lichidelor din corp?',
        choice1:'sucul gastric are pH 1,4',
        choice2:'lacrimile au pH 7,1 si sangele 7,4',
        choice3:'sucul intestinal are pH 8,0',
        choice4:'sangele are pH 7,5',
        answer:1,
    },
    {
        question:'translatia:',
        choice1:'este procesul prin care se decodifica coodul genetic si formeaza lantul de aminoacizi',
        choice2:'are loc in ribozomi',
        choice3:'se formeaza molecula ARN-m dintr-o catena vehe si una noua',
        choice4:'se formeaza molecula ARN-m pe baza complementaritatii bazelor',
        answer:4,
    },
    {
        question:'transcriptia:',
        choice1:'molecula de ARN-t contine codul genetic pe care il va duce la ribozomi',
        choice2:'are loc in nucleul celulei',
        choice3:'se formeaza molecula ARN-m pe baza complementaritatii bazelor',
        choice4:'codul genetic este decodificat formandu-se lantul proteic',
        answer:4,
    },
    {
        question:'celula:',
        choice1:'este unitatea de baza,morfologica si functionala a animalelor',
        choice2:'celulele umane sunt procariote pentru ca se divid prin mitoza',
        choice3:'pot fi 2 tipuri: unicelulare si pluricelulare',
        choice4:'este unitatea de baza,morfologica si functionala a tuturor organismelor vii',
        answer:4,
    },
    {
        question:'citoplasma celulei:',
        choice1:'vascozitatea sa depinde de varsta celulei si de activitate',
        choice2:'contine organite,nucleul si membrana plasmatica',
        choice3:'este semilichida si protejeaza impotriva microorganismelor',
        choice4:'permite trecerea ionilor si a moleculelor hidrosolubile doatorita membranei semipermeabile',
        answer:1,
    },
    {
        question:'membrana plasmatica:',
        choice1:'este formata din 2 straturi bistratificate de fosfolipide si proteine',
        choice2:'prezinta canale pentru trecerea moleculelor de O2 si CO2 printre fosfolipide',
        choice3:'are un strat bistratificat de fosfolipide si proteine ce plutesc printre ele',
        choice4:'are structura de mozaic fluid pentru ca fosfolipidele plutesc libere fara sa rupa membrana',
        answer:3,
    },
    {
        question:'reticulul endoplasmatic neted:',
        choice1:'are rol in sinteza proteica',
        choice2:'are rol in sinteza lipidelor,a membranei si in depozitarea calciului',
        choice3:'este un ansamblu de membrane nonmembranoase ce permit transportul moleculelor',
        choice4:'deriva din sacii aparatului golgi si are rol in sinteza lipidelor',
        answer:2,
    },
    {
        question:'celulele:',
        choice1:'cele procariote nu au nucleu si organite, si se divid prin mitoza',
        choice2:'cele eucariote sunt bacteriile, nu prezinta nucleu',
        choice3:'au structura si functie similara',
        choice4:'cele eucariote au nucleu,organite si se divid prin mitoza',
        answer:4,
    },
    {
        question:'afirmatia corecta cu privire la ciclul celular:',
        choice1:'este impartit in interfaza si mitoza',
        choice2:'in profaza cromatina se spiralizeaza,nucleul dispare si ADN-ul se replica',
        choice3:'in metafaza cromozomii ajung in placa ecuatoriala',
        choice4:'citokineza reprezinta diviziunea a celor 2 celule diferite',
        answer:3,
    },
    {
        question:'afirmatia adevarata cu privire la tesuturi:',
        choice1:'tesutul adipos este unul conjunctiv si prezinta fibre adipoase',
        choice2:'tesutul epitelial startificat cubic se gaseste pe suprafata ovarului si fata anterioara a cristalimului',
        choice3:'tesutul conjunctiv elastic se gaseste in corzile vocale si in peretii arterelor',
        choice4:'pielea este tesut epitelial stratificat pavimentos cheratinizat',
        answer:3,
    },
    {
        question:'afirmatia corecta cu privire la glande:',
        choice1:'glandele pot fi holocrine si apocrine',
        choice2:'glandele intestinale sunt de tip unicelular compus tubular',
        choice3:'glandele sebacee sunt apocrine pentru ca se dezintegreza',
        choice4:'glanda parotida este de tip compusa tubulo-acinoasa',
        answer:4,
    },
    {
        question:'pleura:',
        choice1:'are o foita parietala ce inveleste cavitatea si una viscerala ce captuseste organele',
        choice2:'are rol lubrifiant si permite organelor sa alunece',
        choice3:'protejeaza organele cavitatii abdominale',
        choice4:'contine lichid sinovial cu rol lubrifiant',
        answer:2,
    },
    {
        question:'afirmatia adevarata cu privire la piele:',
        choice1:'reprezinta 15% din structurile corpului',
        choice2:'are 2 straturi:epiderm si hipoderm',
        choice3:'in membrana bazala se formeaza noi celule precum cheratinocitele',
        choice4:'stratul cornos se reinnoieste constant si are 25-30 straturi',
        answer:4,
    },
    {
        question:'afirmatie adevarata cu privire la tesuturi:',
        choice1:'cel epitelial simplu cilindric nu este vascularizat si captuseste traheea',
        choice2:'membrana bazala este formata din fibre de colageni si glicoproteine',
        choice3:'uroteliu se mai numeste si tesut tranzitional si face parte din cel epitelial simplu stratificat',
        choice4:'cel epitelial lax sau aerolar se gaseste sub piele si contine fluid tisular',
        answer:2,
    },
    
    {
        question:'tesutul conjunctiv lax:',
        choice1:'se gaseste sub epitelii si are fibre de colagen dispuse neordonat',
        choice2:'are fibre de reticulina, elastina si colagen ce sunt sintetizate de catre fibroblaste',
        choice3:'contine fluid tisular si in cadrul lui au loc procese de aparare imunitara',
        choice4:'se mai numeste aerolar si contine macrofage,limfocite,mastocite si fibroblaste',
        answer:4,
    },
    {
        question:'tesutul cartilaginos:',
        choice1:'hialin, cuprinde scheletul fetal, extremitatile oaselor lungi, traheea si laringele',
        choice2:'se regenereaza, datorita condroblastelor ce sintetizeaza fibrele de colagen',
        choice3:'fibros, este cel mai rezistent, fiind prezent in oase',
        choice4:'elastic, se afla in peretii arterelor si laringelui',
        answer: 2,
    },
    {
        question:'tesutul epitelial:',
        choice1:'simplu pavimentos, inveleste vasele de sange',
        choice2:'cartilaginos hialin, se afla in trahee si bronhii',
        choice3:'stratificat cubic, se afla in glandele sudoripare',
        choice4:'uroteriul isi modifica forma la extensie',
        answer:3,
    }
]

const CORRECT_BONUS=10;
const MAX_QUESTIONS=20;
startGame=()=>{
    questionCounter=0
    score=0
    availableQuestions=[...questions];
    
    getNewQuestion();
};
getNewQuestion=()=>{
    if(availableQuestions.length===0 || questionCounter>= MAX_QUESTIONS){
        question.innerHTML="Ai ajuns la "+ score + " puncte!"
        choices.innerHTML=" ";
        questionCounter.innerHTML=" "
        
        document.getElementById('next').addEventListener('click',()=>{
            setTimeout(()=>{
           return window.location.assign("../start page/index.html");
          },1000)
          })
    }
    questionCounter++;
    questionCounterText.innerHTML=questionCounter+"/" + MAX_QUESTIONS;

    const questionIndex= Math.floor(Math.random()*availableQuestions.length);
    currentQuestion=availableQuestions[questionIndex]
    question.innerHTML=currentQuestion.question;
    choices.forEach(choice=>{
        const number = choice.dataset['number'];
        choice.innerHTML=currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionIndex,1);
    acceptingAnswers=true
};

choices.forEach(choice=>{
    choice.addEventListener('click',e=>{
        if(!acceptingAnswers)return;
        acceptingAnswers=false;
        const selectedChoice=e.target
        const selectedAnswer=selectedChoice.dataset["number"];
        const classToApply=
        selectedAnswer==currentQuestion.answer ? "correct" : "incorrect";
            
        
       
        
        if(classToApply=== 'correct'){
            incrementScore(CORRECT_BONUS);
            
        }
        else{
            if(currentQuestion.answer==1){
                currentQuestion.answer="A";
            }
            if(currentQuestion.answer==2){
                currentQuestion.answer="B";
            }
            if(currentQuestion.answer==3){
                currentQuestion.answer="C";
            }
            if(currentQuestion.answer==4){
                currentQuestion.answer="D";
            }
            question.innerHTML="Raspunsul corect: "+currentQuestion.answer;
        }
    
        
           
    

        selectedChoice.parentElement.classList.add(classToApply);
        document.getElementById('next').addEventListener('click',()=>{
            setTimeout(()=>{
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQuestion()
            },500)
        })
        
        
        
    })
})
incrementScore = num=>{
    score+=num
    scoreText.innerHTML=score;
}

startGame();