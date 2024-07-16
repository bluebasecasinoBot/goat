import { __c , __SYD, __sC, __p} from "./sydneyLib/sydneyDom.js"



__SYD._p4 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    justifyContent:'flex-start',
                    paddingLeft:'30px',
                    paddingRight:'30px',
                    background:'transparent',
                    padding:'20px 10px'
                }
            }),
            id:'buyGuide'
        },
        [
            __c('h1',{style:`font-weight:900;padding:10px 0;font-weight:100;font-size:${__p(['_p4','__size'],'4rem')}`},['How To Buy']),
            __SYD.buy_tabs(
                {content:`Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.`,title:`Create a Wallet`}
            ),
            __SYD.buy_tabs({
                content:`Have ETH in your wallet to switch to $GOAT. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.`,title:`Get Some ETH`
            }),
            __SYD.buy_tabs({
                content:`Go to app.uniswap.org on the browser inside your Metamask app. Connect your wallet. Paste the $GOAT token address into Uniswap, select GOAT, and confirm. When Metamask prompts you for a wallet signature, sign.`,title:`Go to Uniswap`
            }),
            __SYD.buy_tabs({
                content:`switch ETH for $GOAT. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.`,title:`Switch ETH to $GOAT`
            }),
        ],
        {
            createState:{
                stateName:'_p4',
                state:{__size:'4.5rem',__flex_child:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem'}},{size:'<700px',prop:{__flex_child:'column'}}],
                defState:{__size:'4.5rem',__flex_child:'row'}
            }
        }
    )
}

__SYD.buy_tabs = ({title = '' , content = ''}) =>{
    return __c(
        'div',
        {
            style:'width:100%;max-width:1000px;height:fit-content;border-radius:30px;border:2px solid #008488;background:#d4c5c0'
        },
        [
            __c('div',{style:'height:70px;border-bottom:2px solid #008488;width:100%;display:flex;align-items:center;column-gap:20px;justify-content:flex-end;padding:5px 20px;'},[
                __c('span',{style:'height:40px;width:40px;background:#008488;border-radius:50%'}),
                __c('span',{style:'height:40px;width:40px;background:#97AD62;border-radius:50%'}),
            ]),
            __c(
                'div',
                {
                    style:`height:fit-content;min-height:250px;padding:10px 20px;width:100%;background:unset;display:flex;align-items:${__p(['_p4','__flex_child'],'row') === 'row' ? 'center' : 'flex-start'};column-gap:20px;row-gap:20px;flex-direction:${__p(['_p4','__flex_child'],'row')};`
                },
                [
                    __c('div',{style:'min-height:100px;min-width:100px;background-image:url("./assets/logo.jpg");border-radius:50%;background-color:#008488'},[],{genericStyle:['bg_fit']}),
                    __c(
                        'div',
                        {
                            style:'width:100%'
                        },
                        [
                            __c('p',{style:'font-size:28px;text-align:left;color:#008488;text-transform:capitalize'},[title]),
                            __c('p',{style:'font-size: 1.2rem;line-height: 1.75rem;text-align:left;font-weight:100;color:#171717'},[
                                content
                            ])
                        ]
                    )
                ]
            )
        ]
    )
}