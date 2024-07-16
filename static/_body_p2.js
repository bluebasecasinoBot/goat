import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v} from './sydneyLib/sydneyDom.js';

__sS(
    {
        nameTag:'_social_style',
        style:{
            minHeight:'40px',
            minWidth:'40px',
            cursor:'pointer',
            borderRadius:'50%',
        }
    }
)

__SYD._p2 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    flexDirection:__p(['_p2','_flex'],'row'),
                    transform:'unset',
                    marginBottom:'20px'
                }
            })
        },
        [
            __c(
                'div',
                {
                    style:`min-height:fit-content;height:100%;width:${__p(['_p2','_flex'],'row') === 'row' ? '60%' : '100%'};background:unset;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:20px`
                },
                [
                    __c('h2',{style:`font-size:${__p(['_p2','__font'],{2:'60px'})['2']}`},['That\'s why he\'s called the']),
                    __c('h1',{style:`font-size:${__p(['_p2','__font'],{1:'200px'})['1']};color:#01d8df`},['GOAT']),
                    __SYD.about_text_p2(),
                    __SYD.page1Socials(),
                    __c(
                        'div',
                        {style:'display:flex;flex-direction:column;width:100%;row-gap:10px;align-items:center;text-align:left'},
                        [
                            __c(
                                'p',
                                {
                                    style:'font-size:22px;width:100%;min-width:fit-content;text-align:left'
                                },
                                [
                                    'CONTRACT--ADDRESS'
                                ]
                            ),
                            __c(
                                'div',
                                {
                                    style:`padding:50px 10px;width:100%;background:#fff;font-family:ubuntu;font-size:${__p(['_p2','_flex'],'row') === 'row' ? '20px' : '13px'};font-weight:900;text-align:center;cursor:pointer`
                                },
                                [
                                    '-----------------------------------------'

                                ],
                                {
                                    events:{
                                        onclick:() =>{
                                            navigator.clipboard.writeText('0x1852B16e564f5413C45986D13442791B08C9D3B8')
                                            __v['c_a'].textContent = 'Contract Address Copied'

                                            const timer = setTimeout(() =>{
                                            __v['c_a'].textContent = '0x1852B16e564f5413C45986D13442791B08C9D3B8'
                                            clearTimeout(timer)
                                            },1500)
                                        }
                                    },
                                    type:'c_a'
                                }
                            )
                        ]
                    )
                ]
            ),
            __c(
                'div',
                {
                    style:`min-height:${__p(['_p2','_flex'],'row') === 'row' ? '100vh' : '300px'};width:${__p(['_p2','_flex'],'row') === 'row' ? '40%' : '100%'};background-image:url("./assets/goatx.png");`//url("./assets/goatx.jpg")
                },[],
                {
                    genericStyle:[__p(['_p2','_flex'],'row') === 'row' ? 'bg_cover' : 'bg_fit'],
                }
            ),
        ],
        {
            createState:{
                stateName:'_p2',
                state:{_flex:'row',__font:{1:'200px',2:'60px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{_flex:'column-reverse',__font:{1:'130px',2:'30px'}}}],
                defState:{_flex:'row',__font:{1:'200px',2:'60px'}}
            }
        }
    )
}

__SYD.page1Socials = () =>{
    return __c(
        'div',
        {
            style:'width:100%;padding:10px 0;display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap'
        },
        [
            // __SYD.page1SocialBtn({contentSrc:'mm',link:''}),
            __SYD.page1SocialBtn({contentSrc:'tel',link:'https://t.me/thegoatonbase'}),
            __SYD.page1SocialBtn({contentSrc:'x',link:'https://x.com/thegoaton_base'})
        ]
    )
}

__SYD.page1SocialBtn = ({contentSrc,link = '#'}) =>{
    return __c(
        'div',
        {
            style:__sC._social_style({method:'add',style:{backgroundImage:`url('./assets/${contentSrc}.png')`}}),
            class:'click'
        },
        [],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    window.location = link
                }
            }
        }
    )
}
__SYD.freeText_def = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:22px;width:50%;min-width:fit-content;text-align:center'
        },
        [
            text
        ]
    )
}
__SYD.freeText_def_small = (text) =>{
    return __c(
        'p',
        {
            style:'font-size:16px;width:100%;text-align:center'
        },
        [
            text
        ]
    )
}

__SYD.about_text_p2= () =>{
    return __c('p',{style:'font-size: 1.5rem;line-height: 1.75rem;text-align:left;font-weight:100;width:100%'},[
        `In a world full of majestic creatures, there's one animal that stands head and horns above the rest: the goat. These quirky, agile creatures have been silently plotting their rise to greatness, and now it's time to spread the word far and wide across the BASE chain.
        Apart from GOAT being an animal it’s also know as GREATEST of all time 
        Cats and dogs have had their time it’s time for the $GOAT`
    ])
}
