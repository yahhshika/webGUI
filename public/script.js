document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".texteditor").style.display = 'none';
})
// no clicking the notepad icon a dialog box must open up
document.querySelector(".notepad").addEventListener("click", ()=>{
    document.querySelector(".firstDialog").style.display = 'block';

})
//on clicking create new file a notepad must open up 
document.querySelector(".opt3a").addEventListener("click", ()=>{
    document.querySelector(".texteditor").style.display = 'flex';
    document.querySelector(".firstDialog").style.display = 'none';

})
//on clicking the cross button dialog must be removed
document.querySelector(".firstDialogOperator").addEventListener("click", ()=>{
    document.querySelector(".firstDialog").style.display = 'none';

})

//variable to check the display of file-options
let checkdisplaymore = false;
let checkdisplayfile = false;
let checkdisplayedit = false;

document.querySelector(".file").addEventListener("click",()=>{
    if(!checkdisplayfile){
        document.querySelector('.fileoptions').style.display = 'block';
        document.querySelector(".editoptions").style.display = 'none';
        document.querySelector(".moreoptions").style.display ='none';
        checkdisplayedit= false;
        checkdisplaymore= false;

        checkdisplayfile = true;
        
    }
    else{
        document.querySelector('.fileoptions').style.display = 'none';
        checkdisplayfile = false;
        
        
        
    }
    
    
})
//variable to check the display of edit options
document.querySelector('.edit').addEventListener("click",()=>{
    if(!checkdisplayedit){
        document.querySelector(".editoptions").style.display ='block';
        document.querySelector('.fileoptions').style.display = 'none';
        document.querySelector(".moreoptions").style.display ='none';
        checkdisplaymore = false;
        checkdisplayfile = false;
        checkdisplayedit = true;
        
        
        
    }else{
        document.querySelector(".editoptions").style.display ='none';
        checkdisplayedit=false;
        
        
        
    }
})
document.querySelector('.more').addEventListener("click",()=>{
    if(!checkdisplaymore){
        document.querySelector(".moreoptions").style.display ='block';
        document.querySelector('.fileoptions').style.display = 'none';
        document.querySelector('.editoptions').style.display = 'none';
        checkdisplayedit = false;
        checkdisplayfile = false;
        checkdisplaymore = true;
        
        
        
    }else{
        document.querySelector(".moreoptions").style.display ='none';
        checkdisplayedit=false;
        
        
        
    }
})

// if(checkdisplayedit || checkdisplayfile){

//     document.querySelector(".texteditor").addEventListener("click",(e)=>{
//         console.log(e);
        
//         document.querySelector(".editoptions").style.display ='none';
//         document.querySelector('.fileoptions').style.display = 'none';
//         checkdisplayedit = false;
//         checkdisplayfile= false;
    
//     })
// }