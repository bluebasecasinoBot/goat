import { __SYD, __c, __sC, __p } from "./sydneyLib/sydneyDom.js";


__SYD._p3 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundColor:'#3788Da',
                    flexDirection:__p(['_p3','__flex'],'row'),
                    justifyContent:'flex-start',
                    padding:'20px 10px',
                    minHeight:'unset'
                    // transform:'unset'
                }
            }),
            id:'about'
        },
        [
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p3','__size'],'4.5rem') === '4.5rem' ? '80vh' : '300px'};min-width:${__p(['_p3','__size'],'4.5rem') === '4.5rem' ? '40%' : '100%'};background-image:url("./assets/gCity.jpg");`
                },
                [
                    
                ],
                {
                    genericStyle:['bg_cover'],
                }
            ),
            __c(
                'div',
                {
                    style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column'
                },
                [
                    __c('h1',{style:`font-weight:900;font-weight:100;font-size:${__p(['_p3','__size'],'4rem')}`},['About']),
                    __SYD.about_text()
                ]
            )
        ],
        {
            createState:{
                stateName:'_p3',
                state:{__size:'4.5rem',__flex:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem',__flex:'column'}}],
                defState:{__size:'4.5rem',__flex:'row'}
            }
        }
    )
}

__SYD.about_text = () =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;max-width:500px;text-align:center;font-weight:100;'},[
        `In a world full of majestic creatures, there's one animal that stands head and horns above the rest: the goat. These quirky, agile creatures have been silently plotting their rise to greatness, and now it's time to spread the word far and wide across the BASE chain.
        Apart from GOAT being an animal it’s also know as GREATEST of all time 
        Cats and dogs have had their time it’s time for the $GOAT`
    ])
}