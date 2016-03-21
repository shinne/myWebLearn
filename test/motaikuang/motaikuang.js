// JavaScript Document

function DialogBox(MainDlgID,DlgID,TitleID,ContentID)
{
    this.MainID=MainDlgID;//背景层的ID
    this.DlgID=DlgID;     //对话框 层ID
    this.TitleID=TitleID; //对话框标题栏 层Id
    this.ContentID=ContentID; //对话框信息框 层Id
    
    //---------------------------------------------------------大框(背景层)------------------------
    var MainNode=document.createElement("div");
    
    MainNode.setAttribute("id",this.MainID);
    MainNode.style.backgroundColor="#000000";
    
    MainNode.style.left="0px";
    MainNode.style.top="0px";    
    MainNode.style.width="0px";
    MainNode.style.height="0px";
    
    MainNode.innerHTML="";
    MainNode.style.position="absolute";
    MainNode.style.zIndex="100";
    
    MainNode.style.display="none";
    
    if(MainNode.filters)
    {
        MainNode.style.filter="alpha(opacity=70)";
        }
        else
        {
            MainNode.style.opacity="0.7";
            }
            
        //--------------------------------------------------------- 对话框----------------
var dlgNode=document.createElement("div");
        dlgNode.setAttribute("id",this.DlgID);
        dlgNode.style.backgroundColor="#FF7800";
        dlgNode.style.zIndex="1020";
        dlgNode.style.display="none";
        
        dlgNode.style.left="0px";
        dlgNode.style.top="0px";        
    
        dlgNode.style.width="300"+"px";        
        dlgNode.style.height="200"+"px";
        
        dlgNode.innerHTML="";
        dlgNode.style.color="#890987";
        dlgNode.style.position="absolute";    
        
        //-----------------------------------------------------title-----------------------
        
        var TitleNode=document.createElement("div");
        TitleNode.setAttribute("id",this.TitleID);
        TitleNode.style.backgroundColor="#FFFFFF";
        TitleNode.style.width="100%";
        TitleNode.style.height="30"+"px";
        TitleNode.innerHTML="Title";
        TitleNode.style.color="#890117";    
        
        //-----------------------------------------------------Information-----------------
        
        var InforNode=document.createElement("div");
        InforNode.setAttribute("id",this.ContentID);
        InforNode.style.backgroundColor="#CCCCCC";
        InforNode.style.width="100%";
        InforNode.style.height="100%";
        InforNode.innerHTML="Content";
        InforNode.style.color="#890117";
        
        //-----------------------------------------------------各节点加入Dom------------
    
        dlgNode.appendChild(TitleNode);
        dlgNode.appendChild(InforNode);
        document.body.appendChild(dlgNode);
        document.body.appendChild(MainNode);
    }
    //====================================================================================
    
    //打开对话框-------------------------------------------------------------------------
    DialogBox.prototype.open=function(titleText,informaton)
    {
        document.getElementById(this.TitleID).innerHTML="<table border='0px' width='100%'><tr><td style='text-align:left;width:70%;'>"+titleText+"</td><td style='text-align:right;width:30%;'><input type='button' onclick='javascript:document.getElementById(\""+this.MainID+"\").style.display=\"none\";document.getElementById(\""+this.DlgID+"\").style.display=\"none\";'  value='关闭'/></td></tr></table>";
        document.getElementById(this.ContentID).innerHTML=informaton;
        
        var Dwidth=document.documentElement.scrollWidth;
        var Dheight=document.documentElement.scrollHeight;
        
        var CHeight=document.documentElement.clientHeight;
        var CWidth=document.documentElement.clientWidth;
        
        var scrolltop=document.documentElement.scrollTop;
        
        var Dlgwidth=document.getElementById(this.DlgID).style.width;
        var DlgHeight=document.getElementById(this.DlgID).style.height;
        
        document.getElementById(this.MainID).style.width=Dwidth+"px";
        document.getElementById(this.MainID).style.height=Dheight+"px";
        
        document.getElementById(this.DlgID).style.left=(CWidth/2)-(parseInt(Dlgwidth)/2)+"px";
        document.getElementById(this.DlgID).style.top=(scrolltop+CHeight/2-parseInt(DlgHeight)/2)+"px";
        
        document.getElementById(this.MainID).style.display="block";
        document.getElementById(this.DlgID).style.display="block";
        
        }