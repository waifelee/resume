import Reflux from 'reflux'
import Action from '../action/action'

export default Reflux.createStore({
    listenables: [Action],

    i:0,
    top:0,
    isPC:true,

    onGetSideBarIndex(){
        this.trigger({
            i: this.i,
            top: this.top
        })
    },
    onSaveSideBarIndex(i){
        var hei = document.body.offsetHeight;
        this.i = i;
        this.top = -i*hei;
    }
})