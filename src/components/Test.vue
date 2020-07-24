<!--
    @Created by 冯赛 on 2020/4/26 0026 12:01
    @
-->
<template>
  <div>
    <div class="Section0">
      <p class=MsoTitle align=justify><b><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:'Times New Roman';
font-weight:bold;font-size:20.0000pt;mso-font-kerning:1.0000pt;"><font face="仿宋">核磁共振原理的量子力学解释</font></span></b><b><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:'Times New Roman';
font-weight:bold;font-size:20.0000pt;mso-font-kerning:1.0000pt;"></span></b></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">本文主要主要目的在于从最基本的量子物理出发解释核磁共振原理，希望能够对过去一些半经典力学解释一个弥补。在开始介绍核磁共振之前，我们要简单介绍几个概念。</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;"><font face="宋体">自旋</font></span></i><i><span class="16" style="mso-spacerun:'yes';font-family:宋体;color:rgb(68,114,196);
font-style:italic;"><font face="宋体">和质子</font></span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;"></span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">自旋</font>(</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">spin)</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font
        face="仿宋">和质量、电荷等概念一样，是自然界中最基本的固有量。其发现于</font>1922年的Stern-</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">Gerlach</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">实验。在宏观世界中一个旋转的陀螺有角动量，可以认为旋转是角动量的来源。在微观世界中，自旋是基本粒子（在此基本粒子指中子、质子、电子、光子，不涉及标准模型的更基本的粒子）角动量的来源。但是并没有人真正观察到基本粒子的旋转，可以说，基本粒子是不会旋转的（因为如今所有理论都不依赖于粒子自旋一定要伴随着旋转）。</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">微观粒子的自旋通常是整数（</font>0，1，</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">2</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">）或者半整数（</font>1/2，3/2，</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">5/2</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">），分别对应玻色子和费米子。在核磁共振影像中，我们关心的是自旋为</font></span><img
        width="70" height="21" src="../assets/imgages/核磁共振原理373.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">的质子。这主要是原因在于人体内含量最多的元素是氢元素。在不同物质中其含量或者其运动形态有很大差异，因此质子成为我们核磁共振影像的首选元素。自旋角动量和磁矩有如下简单关系</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="67" height="42" src="../assets/imgages/核磁共振原理459.png"><b><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-weight:bold;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></b></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">对于质子来说</font></span><img width="38" height="21"
                                                                                         src="../assets/imgages/核磁共振原理467.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">只能取两个值</font>1/2和-1/2，如图所示：</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="426" src="../assets/imgages/核磁共振原理489.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">1/2通常也称作自旋向上，-1/2称作自旋向下。向上和向下只是两种状态，并不意味着哪个方<a name="_Hlk42377009"><font
        face="仿宋">向叫上</font></a><font face="仿宋">。通常粒子自旋处在这两种态的线性叠加态。</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <i><span class="16" style="mso-spacerun:'yes';font-family:宋体;color:rgb(68,114,196);
font-style:italic;"><font face="宋体">测量</font></span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;"></span></i></p>
      <p class=MsoNormal align=justify><i><span class="16"
                                                                                                         style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;">&#9;</span></i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">测量在量子力学中是一个非常重要的概念。众所周知的薛定谔的猫即是在描述量子力学的测量概念。自旋就相当于薛定谔的猫，只有当我们测量的时候，状态迅速塌缩到其中一个态上，我们也只能得到两种结果中的其中一个，向上或者向下。</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <i><span class="16" style="mso-spacerun:'yes';font-family:宋体;color:rgb(68,114,196);
font-style:italic;"><font face="宋体">泡利矩阵</font></span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;"></span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">泡利矩阵又称作泡利自旋矩阵，是用来描述自旋系统的关键。简单来讲，本征值就是薛定谔</font>&#8220;猫&#8221;的可能状态的值。本征矢量在量子力学中代表量子态，或者薛定谔&#8220;猫&#8221;的可能状态。比如，猫活着的状态的本征值为0，猫死亡的状态本征值为1。这个描述可以用一种数学语言来描述-线性代数，在量子力学中也被称作矩阵力学。自旋系统的能量或者哈密顿量可以写作：</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="167" src="../assets/imgages/核磁共振原理840.png"><b><i><span class="16" style="mso-spacerun:'yes';font-family:仿宋;color:rgb(68,114,196);
font-weight:bold;font-style:italic;">&nbsp;</span></i></b></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">自旋和泡利有简单的关系</font></span><img width="77" height="42"
                                                                                              src="../assets/imgages/核磁共振原理853.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，</font></span><img width="39" height="21"
                                                                                    src="../assets/imgages/核磁共振原理855.png"><span
        style="mso-spacerun:'yes';font-family:宋体;color:rgb(0,0,0);
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="宋体">是某个自旋的磁矩，</font></span><img width="40" height="21"
                                                                                            src="../assets/imgages/核磁共振原理865.png"><span
        class="16" style="mso-spacerun:'yes';font-family:仿宋;color:rgb(0,0,0);
font-style:normal;"><font face="仿宋">是该自旋的外部磁场强度，</font></span><img width="115" height="21"
                                                                   src="../assets/imgages/核磁共振原理878.png"><span class="16"
                                                                                                          style="mso-spacerun:'yes';font-family:仿宋;color:rgb(0,0,0);
font-style:normal;"><font face="仿宋">。</font></span><img width="39" height="21" src="../assets/imgages/核磁共振原理880.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">就是所谓的泡利矩阵。在每个分量的定义为：</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="83" height="42" src="../assets/imgages/核磁共振原理902.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify>
        <img width="95" height="42" src="../assets/imgages/核磁共振原理904.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify>
        <img width="98" height="42" src="../assets/imgages/核磁共振原理906.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font
        face="仿宋">通常我们定义</font>MR设备中的轴向方向为z轴方向。</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <i><span class="16" style="mso-spacerun:'yes';font-family:宋体;color:rgb(68,114,196);
font-style:italic;"><font face="宋体">自旋进动</font></span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;"></span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">进动现象在物理世界中十分常见，旋转的陀螺会因为重力原因一边自转，一边围绕主轴发生进动。这和自旋的进动十分类似，但是其机制却有明显不同。自旋系统的进动要从薛定谔方程讲起：</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="319" height="42" src="../assets/imgages/核磁共振原理1021.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">其中</font></span><img width="214" height="21"
                                                                                     src="../assets/imgages/核磁共振原理1025.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，解如下方程：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="195" height="42" src="../assets/imgages/核磁共振原理1034.png"><span style="mso-spacerun:'yes';font-family:'Cambria Math';mso-fareast-font-family:仿宋;
mso-bidi-font-family:宋体;font-weight:normal;font-style:normal;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><br></span><img width="184" height="42"
                                                                src="../assets/imgages/核磁共振原理1036.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">解得：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="146" height="42" src="../assets/imgages/核磁共振原理1042.png"><span style="mso-spacerun:'yes';font-family:'Cambria Math';mso-fareast-font-family:仿宋;
mso-bidi-font-family:宋体;font-weight:normal;font-style:normal;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><br></span><img width="138" height="42"
                                                                src="../assets/imgages/核磁共振原理1044.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">考虑到</font></span><img width="137" height="21"
                                                                                      src="../assets/imgages/核磁共振原理1049.png"><span
        style="mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，并且设定</font></span><img width="47" height="21"
                                                                                        src="../assets/imgages/核磁共振原理1055.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">的初始相位为</font>0，两个态的相差为</span><img width="84" height="21"
                                                                                                  src="../assets/imgages/核磁共振原理1071.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">。以</font></span><img width="47" height="21"
                                                                                     src="../assets/imgages/核磁共振原理1074.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">静止的参考系观察该自旋态的话有如下波函数形式：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="296" height="63" src="../assets/imgages/核磁共振原理1099.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">我们可以看到，自旋态是一个随时间震荡的态。这个震荡频率</font></span><img width="86"
                                                                                                              height="21"
                                                                                                              src="../assets/imgages/核磁共振原理1128.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，该频率也被称作</font></span><b><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-weight:bold;font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">拉莫进动频率</font></span></b><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，其中</font></span><img width="129" height="42"
                                                                                      src="../assets/imgages/核磁共振原理1146.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">。该结论还可以通过量子统计理论的刘维尔方程得到，在此不做赘述。</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <i><span class="16" style="mso-spacerun:'yes';font-family:宋体;color:rgb(68,114,196);
font-style:italic;"><font face="宋体">进动宏观解释和</font>T</span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;">1</span></i><i><span class="16" style="mso-spacerun:'yes';font-family:宋体;color:rgb(68,114,196);
font-style:italic;"><font face="宋体">弛豫</font></span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;"></span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">宏观进动通常的解释是将自旋比做陀螺，在外场作用下，陀螺倾向于围绕磁场主轴</font>z方向旋转。由于陀螺在垂直主轴z方向的xy平面进动相位是随机分布的，因此在xy平面内不会产生净磁矩，也就是说在xy方向并不存在被磁化的情况。由玻尔兹曼理论，在z轴方向，高能级和低能级的概率比有如下关系：</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="92" height="42" src="../assets/imgages/核磁共振原理1329.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-style:italic;font-size:12.0000pt;
mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">和外界磁场强度同向的陀螺能级更低，因此陀螺更希望和磁场同向，因此净磁矩总体朝向外界磁场方向。这个混杂了经典力学和量子力学的解释虽然告诉了我们人体在磁场中被磁化了，但是其中有比较大的缺陷。按照这个解释磁化率只和温度相关，无法对</font>T</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;">1</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">衰减过程中不同物质形态具有不同的衰减时间这个现象一个合理解释。通常人们会跳出这个理论框架，单独讨论衰减速率。在此我们将重新从基本原理讨论为什么不同物质的衰减时间不同。</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">假设我们相获得一个小体积内的总体净磁化强度。这个体积相对于质子来说足够大。另外我们在此考虑的时间平均是远超过进动周期的。所以小体积内的磁化强度，是时间和质子个数的平均。</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="86" height="21" src="../assets/imgages/核磁共振原理1614.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">对单个质子来说，其时间平均</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="319" height="63" src="../assets/imgages/核磁共振原理1630.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">时间项已经消除。可以看出，在加入磁场之后，只考虑单个质子的话，其时间平均是一开始的自旋态决定的。也就是说，即便是大量的质子做了平均，小体积的净磁化强度也不会随时间变化。因此</font>T</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">1</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">弛豫过程是不存在的。这显然与真实情况不符。</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">其实我们的模型过于简化了。我们知道，常温人体环境很复杂，质子在各个组织中的运动方式差异巨大。比如在血液中，质子会快速和其他分子或者离子碰撞。而在骨骼中，质子几乎只有震动而且含量比较少。质子所感受的磁场是一个不断变化的过程。在有规律的变化下，比如在拉莫进动频率的振动磁场作用下，自旋会跃迁至其他态，也就是所谓的产生了核磁共振。那么在无规律的随时间变换的磁场下，自旋会不停的在两个态之间随机跃迁。那么我们根据统计物理原理，可以知道加磁场足够长时间后，自旋向上和向下两个态已经处于平衡态，其两者比例为：</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="268" height="63" src="../assets/imgages/核磁共振原理1991.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font
        face="仿宋">该概率，也是质子自旋从向上跳转至向下的概率。这个假设为我们讨论其动力学行为，也就是所谓的弛豫过程提供了方便。另：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="89" height="21" src="../assets/imgages/核磁共振原理2050.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify>
        <img width="87" height="21" src="../assets/imgages/核磁共振原理2052.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify>
        <i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">关于自旋向上的质子可以有如下动力学方程：</font></span></i><i><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></i></p>
      <p class=MsoNormal align=justify>
        <img width="159" height="42" src="../assets/imgages/核磁共振原理2075.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify>
        <i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">其中</font></span></i><img width="64"
                                                                                                           height="21"
                                                                                                           src="../assets/imgages/核磁共振原理2079.png"><i><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font
        face="仿宋">表示单位时间内从向上跳转至向下的个数，</font></span></i><img width="56" height="21" src="../assets/imgages/核磁共振原理2099.png"><i><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">表示单位时间内从向下跳转至向上的质子个数。用</font>M和N改写上式：</span></i><i><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></i></p>
      <p class=MsoNormal align=justify>
        <img width="279" height="42" src="../assets/imgages/核磁共振原理2131.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify>
        <img width="236" height="42" src="../assets/imgages/核磁共振原理2133.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">在稳态下有：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="107" height="42" src="../assets/imgages/核磁共振原理2142.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">解得：</font></span><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></i></p>
      <p class=MsoNormal align=justify>
        <img width="179" height="42" src="../assets/imgages/核磁共振原理2148.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify>
        <img width="121" height="42" src="../assets/imgages/核磁共振原理2150.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">是受很多因素干扰。比如质子周围的环境，是否流动，温度</font>(主要源于p</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">)</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">等因素。因此</font>T</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">1</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">过程的弛豫时间</font></span><img width="45" height="21"
                                                                                          src="../assets/imgages/核磁共振原理2199.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">也会因为组织，磁场强度等而变得不同。</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <i><span class="16" style="mso-spacerun:'yes';font-family:宋体;color:rgb(68,114,196);
font-style:italic;"><font face="宋体">射频激发</font></span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;"></span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">核磁共振设备除了基本磁场</font></span><img width="46" height="21"
                                                                                               src="../assets/imgages/核磁共振原理2236.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">(通常有1</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">.5</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">T和3</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">.0</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">T，2</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">018</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">最高记录</font>3</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">2</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">T)、梯度线圈(用于信号定位)，还有一个特殊的线圈，射频线圈，用于产生在xy平面旋转的磁场。也就是说</span><img width="39"
                                                                                                              height="21"
                                                                                                              src="../assets/imgages/核磁共振原理2311.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">是一个随时间变化的变量，记作：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="239" height="21" src="../assets/imgages/核磁共振原理2328.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">相应的哈密顿量变为：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="146" src="../assets/imgages/核磁共振原理2341.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">其中</font></span><img width="101" height="21"
                                                                                     src="../assets/imgages/核磁共振原理2345.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，</font></span><img width="70" height="42"
                                                                                    src="../assets/imgages/核磁共振原理2347.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">作为常数被忽略。</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">那么我们依然可以写出其薛定谔方程。但是由于求解困难我们通常会做个变形。</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="183" height="42" src="../assets/imgages/核磁共振原理2392.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">另：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="158" height="21" src="../assets/imgages/核磁共振原理2397.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">该变化即在一个以拉莫进动频率旋转的旋转坐标系观察一个量子态随时间的变化。也就是我们传统</font>MRI教材中所解释的，物体受到共振激发时，自旋会转到垂直于z轴9</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">0</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度的平面上进行旋转。在旋转坐标系下看的话，就会发现在垂直于</font>z轴的方向上有一个逐渐变大的净磁矩。我们称这个坐标系为随动坐标系。态</span><img
        width="75" height="21" src="../assets/imgages/核磁共振原理2538.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">的时间微分方程：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
color:rgb(0,0,0);font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="104" src="../assets/imgages/核磁共振原理2548.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify>
        <img width="153" height="21" src="../assets/imgages/核磁共振原理2550.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">为随动坐标系下的势能算符</font></span><img width="63" height="21"
                                                                                               src="../assets/imgages/核磁共振原理2563.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">。</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">将</font></span><img width="75" height="21"
                                                                                    src="../assets/imgages/核磁共振原理2567.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">用本征矢量</font></span><img width="51" height="21"
                                                                                        src="../assets/imgages/核磁共振原理2573.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">和</font></span><img width="51" height="21"
                                                                                    src="../assets/imgages/核磁共振原理2575.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">展开</font></span><img width="219" height="21"
                                                                                     src="../assets/imgages/核磁共振原理2578.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，其中</font></span><img width="120" height="21"
                                                                                      src="../assets/imgages/核磁共振原理2582.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，</font></span><img width="131" height="21"
                                                                                    src="../assets/imgages/核磁共振原理2584.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">。改写</font></span><img width="75" height="21"
                                                                                      src="../assets/imgages/核磁共振原理2588.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">的薛定谔方程：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="63" src="../assets/imgages/核磁共振原理2597.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">上式分别作用两个态的左矢得到：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="63" src="../assets/imgages/核磁共振原理2615.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">由于本征矢之间内积为</font>0，因此有：</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="386" height="42" src="../assets/imgages/核磁共振原理2634.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify>
        <img width="394" height="42" src="../assets/imgages/核磁共振原理2636.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">已知</font>:</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="353" height="42" src="../assets/imgages/核磁共振原理2642.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify>
        <img width="361" height="42" src="../assets/imgages/核磁共振原理2644.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify>
        <img width="199" height="21" src="../assets/imgages/核磁共振原理2646.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify>
        <img width="297" height="42" src="../assets/imgages/核磁共振原理2649.png"><b><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-weight:bold;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></b></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">其中</font></span><img width="147" height="21"
                                                                                     src="../assets/imgages/核磁共振原理2653.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，也可以得到如下方程：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="204" height="42" src="../assets/imgages/核磁共振原理2666.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify>
        <img width="212" height="42" src="../assets/imgages/核磁共振原理2668.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">消掉</font></span><img width="43" height="21"
                                                                                     src="../assets/imgages/核磁共振原理2672.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">后得：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="223" height="42" src="../assets/imgages/核磁共振原理2677.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">设初始态从自旋向上态</font></span><img width="47" height="21"
                                                                                             src="../assets/imgages/核磁共振原理2689.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，开始，</font></span><img width="94" height="21"
                                                                                       src="../assets/imgages/核磁共振原理2694.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，</font></span><img width="94" height="21"
                                                                                    src="../assets/imgages/核磁共振原理2696.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，得到如下解：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="192" height="21" src="../assets/imgages/核磁共振原理2705.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify>
        <img width="198" height="42" src="../assets/imgages/核磁共振原理2707.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">被称作</font>Rabi频率。当外界射频信号频率等于拉莫频率</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="56" height="21" src="../assets/imgages/核磁共振原理2734.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">时，有</font></span><img width="73" height="42"
                                                                                      src="../assets/imgages/核磁共振原理2739.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，考虑到之前将</font></span><img width="70" height="42"
                                                                                          src="../assets/imgages/核磁共振原理2747.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">变为了</font>1。因此</span><img width="246" height="42"
                                                                                          src="../assets/imgages/核磁共振原理2755.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，并且此时</font></span><img width="122" height="21"
                                                                                        src="../assets/imgages/核磁共振原理2761.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，那么</font></span><img width="75" height="21"
                                                                                      src="../assets/imgages/核磁共振原理2765.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">等于</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="273" height="42" src="../assets/imgages/核磁共振原理2769.png"><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></i></p>
      <p class=MsoNormal align=justify>
        <img width="143" height="42" src="../assets/imgages/核磁共振原理2771.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">从向上态转变至向下态时</font></span><img width="94" height="21"
                                                                                              src="../assets/imgages/核磁共振原理2784.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，</font></span><img width="74" height="42"
                                                                                    src="../assets/imgages/核磁共振原理2786.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">,</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">被称作</font></span><img width="38" height="21"
                                                                                      src="../assets/imgages/核磁共振原理2791.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">脉冲，</font></span><img width="81" height="42"
                                                                                      src="../assets/imgages/核磁共振原理2795.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">将</font></span><img width="47" height="21"
                                                                                    src="../assets/imgages/核磁共振原理2797.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">变为</font></span><img width="115" height="42"
                                                                                     src="../assets/imgages/核磁共振原理2800.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">被称作</font></span><img width="55" height="21"
                                                                                      src="../assets/imgages/核磁共振原理2804.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">激发。</font></span><i><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-style:italic;font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">在薛定谔表象下：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="84" src="../assets/imgages/核磁共振原理2818.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">对于单个自旋的三个方向均值有：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="167" src="../assets/imgages/核磁共振原理2836.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="188" src="../assets/imgages/核磁共振原理2838.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="188" src="../assets/imgages/核磁共振原理2840.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">在发生</font></span><img width="55" height="21"
                                                                                      src="../assets/imgages/核磁共振原理2845.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">脉冲激发后：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="63" height="21" src="../assets/imgages/核磁共振原理2853.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify>
        <img width="133" height="42" src="../assets/imgages/核磁共振原理2855.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify>
        <img width="147" height="42" src="../assets/imgages/核磁共振原理2857.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:'Times New Roman';
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">相当于自旋转了</font>9</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">0</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度，在垂直于</font>z轴的平面内旋转。</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:'Times New Roman';
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <i><span class="16" style="mso-spacerun:'yes';font-family:宋体;color:rgb(68,114,196);
font-style:italic;"><font face="宋体">射频激发宏观解释</font></span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;"></span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">单个自旋在均匀磁场下不会产生净磁矩，或者倾向自旋向上态，只有在外界扰动下才会产生态和态之间的跃迁，根据玻尔兹曼统计规则逐渐形成热力学平衡态，从而产生净磁矩。同样在射频磁场作用下，自旋在</font>xy平面以拉莫频率旋转。如果仅考虑单个自旋的话，由于每个自旋所处的相位不同，因此在xy平面是不会出现净磁矩的。但是由于在z轴方向已经出现了净磁矩，将部分自旋转9</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">0</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度之后，会在</font>xy平面出现大量同相位的旋转自旋，进而产生净磁矩，并且根据上一节的结论，这个磁矩会围绕z轴旋转。z轴净磁矩越大，9</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">0</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度激发后</font>xy平面的旋转净磁矩也越多。</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <i><span class="16" style="mso-spacerun:'yes';font-family:宋体;color:rgb(68,114,196);
font-style:italic;">T2<font face="宋体">弛豫</font></span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;"></span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">经过</font></span><img width="55" height="21"
                                                                                     src="../assets/imgages/核磁共振原理3156.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">激发后，如果射频信号马上切断的话。由于自旋和自旋的相互作用，局部磁场并不均匀，因此自旋态不能保证自己维持在原来的态上。但是首先出现的相位的退相干（</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">decoherence</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">），之前相位保持一致的自旋不再同步旋转，也就导致旋转净磁场的减小，直至变为</font>0，该过程也呈指数衰减，该过程被称作T</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">2</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">弛豫。</font>T</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">1</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">弛豫和</font>T</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">2</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">弛豫也可以用半经典唯像理论</font>Bloch方程解释。</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:'Times New Roman';
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <i><span class="16" style="mso-spacerun:'yes';font-family:宋体;color:rgb(68,114,196);
font-style:italic;"><font face="宋体">核磁共振成像原理</font></span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;"></span></i></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">Felix Bloch </span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">和</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;Edward Mills Purcell</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">在</font>1</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">952</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">年因为核磁共振</font>NMR而获得了诺贝尔物理学奖。不过NMR技术只能进行谱分析。</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">Paul C Lauterbur </span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">和</font> </span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">Peter Mansfield</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">因为将</font>NMR改进后应用在3D断层成像上在2</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">003</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">年获得了诺贝尔医学奖。本节将对后面两者的贡献进行总结。</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">从前面的工作我们可以知道，拉莫进动频率和自旋所处的磁场强度直接相关。因此</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">Paul C Lauterbur</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">和</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">Peter Mansfield</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">增加了梯度线圈对空间信息进行了编码，使得三维空间中每一个位置都有一个唯一的磁场强度。因此，我们只需要分析信号中某个频率的强度，或者获得一串信号的频谱信息就可以获得对应空间位置上信号的强度，很巧妙的将三维图像重建问题转变为数学中的傅立叶变换问题。</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">在核磁共振仪中有三个线圈，基础场强线圈</font>(</span><img width="49"
                                                                                                       height="21"
                                                                                                       src="../assets/imgages/核磁共振原理3714.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">)</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">、梯度场强线圈</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">(</span><img width="63" height="21"
                                                             src="../assets/imgages/核磁共振原理3724.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">)</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">、射频线圈</font>(</span><img width="58" height="21"
                                                                                         src="../assets/imgages/核磁共振原理3732.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">)</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">。三个线圈的分布如下图这样排布：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify><img width="412"
                                                                                                     height="246"
                                                                                                     src="../assets/imgages/核磁共振原理3751.png"><img
        width="126" height="246" src="../assets/imgages/核磁共振原理3752.png"><span style="mso-spacerun:'yes';font-family:宋体;font-size:12.0000pt;
mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify><span style="mso-spacerun:'yes';font-family:宋体;font-size:12.0000pt;
mso-font-kerning:0.0000pt;">&#9;</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">左侧图像是</font>MRI设备示意图，右侧是三个线圈的拆分图，对应左侧三种颜色电缆，他们套在同一个圆通上。右侧图从上到下分别产生x方向梯度</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">(</span><img width="90" height="21"
                                                             src="../assets/imgages/核磁共振原理3820.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">)</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">，</font>y方向梯度(</span><img width="91" height="42"
                                                                                          src="../assets/imgages/核磁共振原理3829.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">)</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">和</font>z方向梯度(</span><img width="87" height="21"
                                                                                          src="../assets/imgages/核磁共振原理3838.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">)</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">。</font></span><span style="mso-spacerun:'yes';font-family:宋体;font-size:12.0000pt;
mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=center><img width="188" height="175"
                                                                                            src="../assets/imgages/核磁共振原理3842.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">上图显示了</font>z和y梯度线圈在z方向产生的磁场强度，箭头长的地方表明该处磁场比较强。只需要对y方向梯度线圈旋转9</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">0</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font
        face="仿宋">度就可以得到</font>x方向的梯度线圈。总磁场是基础磁场强度和梯度磁场强度的叠加，比如：</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=center><img width="554" height="194"
                                                                                            src="../assets/imgages/核磁共振原理3939.png"><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">我们可以简单理解一下梯度线圈如何产生梯度磁场。如下面两幅图所示，电流在</font>8个弧上都可以产生对z轴有影响的磁场，真正有效的磁场梯度由4条内弧所产生，也就是黑色比较粗的</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">4</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">条弧，与</font>z轴平行的</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">8</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">条边不会对</font>z轴产生影响，这种结构胶Golay线圈。现在很多更高级的线圈都是计算机辅助设计的，类似指纹结构。如右图所示：</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=center><span><img width="231" height="152"
                                                                            src="../assets/imgages/核磁共振原理4195.png"></span><span><img
        width="161" height="152" src="../assets/imgages/核磁共振原理4299.png"></span><span style="mso-spacerun:'yes';font-family:宋体;font-size:12.0000pt;
mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <i><span class="16" style="mso-spacerun:'yes';font-family:宋体;color:rgb(68,114,196);
font-style:italic;">TE</span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;">,TR,T1WI,T2WI</span></i><i><span class="16" style="mso-spacerun:'yes';font-family:'Times New Roman';color:rgb(68,114,196);
font-style:italic;"></span></i></p>
      <p class=MsoNormal align=justify
        ><span class="16" style="mso-spacerun:'yes';font-family:仿宋;color:rgb(0,0,0);
font-style:normal;"><font face="仿宋">当有净磁矩旋转时，外面的线圈可以测量到震荡电压。这是核磁共振接收的最原始的信号。也只有在人体处于</font>9</span><span class="16"
                                                                                                         style="mso-spacerun:'yes';font-family:仿宋;color:rgb(0,0,0);
font-style:normal;">0</span><span class="16" style="mso-spacerun:'yes';font-family:仿宋;color:rgb(0,0,0);
font-style:normal;"><font face="仿宋">度激发态的时候才能测量到，</font>T1弛豫的平衡态是无法收集到信号的。</span><span class="16" style="mso-spacerun:'yes';font-family:仿宋;color:rgb(0,0,0);
font-style:normal;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="position:absolute;z-index:1;left:0px;
margin-left:140.0667px;margin-top:72.8000px;width:39.0000px;
height:63.0000px;"><img width="39" height="63" src="../assets/imgages/核磁共振原理4400.png"></span><img width="554" height="208"
                                                                                             src="../assets/imgages/核磁共振原理4401.png"><span
        class="16" style="mso-spacerun:'yes';font-family:仿宋;color:rgb(0,0,0);
font-style:normal;">&nbsp;</span></p>
      <p class=MsoNormal align=center><span style="position:absolute;z-index:1;left:0px;
margin-left:111.3333px;margin-top:112.6000px;width:53.0000px;
height:35.0000px;"><img width="53" height="35" src="../assets/imgages/核磁共振原理4403.png"></span><span style="position:absolute;z-index:1;left:0px;
margin-left:297.4667px;margin-top:116.9333px;width:53.0000px;
height:35.0000px;"><img width="53" height="35" src="../assets/imgages/核磁共振原理4404.png"></span><span style="position:absolute;z-index:1;left:0px;
margin-left:361.1333px;margin-top:32.2000px;width:53.0000px;
height:35.0000px;"><img width="53" height="35" src="../assets/imgages/核磁共振原理4405.png"></span><span style="position:absolute;z-index:1;left:0px;
margin-left:39.1333px;margin-top:34.8000px;width:53.0000px;
height:35.0000px;"><img width="53" height="35" src="../assets/imgages/核磁共振原理4406.png"></span><span style="position:absolute;z-index:1;left:0px;
margin-left:208.0667px;margin-top:31.8667px;width:53.0000px;
height:35.0000px;"><img width="53" height="35" src="../assets/imgages/核磁共振原理4407.png"></span><img width="154" height="95"
                                                                                             src="../assets/imgages/核磁共振原理4408.png"><img
        width="154" height="95" src="../assets/imgages/核磁共振原理4409.png"><img width="154" height="95"
                                                                       src="../assets/imgages/核磁共振原理4410.png"><img
        width="154" height="95" src="../assets/imgages/核磁共振原理4411.png"><img width="154" height="95"
                                                                       src="../assets/imgages/核磁共振原理4412.png"><span style="mso-spacerun:'yes';font-family:宋体;font-size:12.0000pt;
mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">(a)</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">是</font>9</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">0</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度激发，少量的自旋在水平方向旋转并且相位发生相干或者趋同，导致水平方向出现一个净磁矩。他们的平均值由黄色箭头表示。</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">(b)</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">随着时间的推移，自旋相位退相干，自旋相位分散，黄色箭头所示的平均磁矩变短。</font></span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">(c)-&#62;</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">（</font>d）射频线串产生一个1</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">80</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度激发，所有相位发生</font>1</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">80</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度转变，并且重新发生相位相干产生高净磁矩。如</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">(e)</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">所示。</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">T</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">E</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">是</font>Echo</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;Time</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">的简写，等于</font>9</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">0</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度激发和信号采样之间的时间差。射频信号和信号采样都由射频线圈完成。</font>1</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">80</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度激发时间位于</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">90</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度激发和信号采样中间，</font>TE</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">/2</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">处。</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">TR是Repe</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">tition Time</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">的简写，等于两次</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">90</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度激发的时间差。</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">T</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">1</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">W如下图所示，一个短TR加一个短TE。短TR说明z轴的磁矩还没有完全恢复至最大值，就紧接着进行了一个</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">90</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度激发，也就是图中两个曲线的顶点交汇处。上下两条曲线分别代表不同的物质，比如水和脂肪。此时采集到信号再进行空间解码（傅立叶变换）后得到的图像就是黄色对应高信号，红色对应低信号。该序列反映了在</font>T</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">1</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">弛豫下的组织最大对比度。</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="287" src="../assets/imgages/核磁共振原理4862.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">PD：质子密度。该序列由长TR和短TE组成。长TR是为了让所有成分的物质的磁矩弛豫到最大值，也就是热力学平衡态。此刻进行9</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">0</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">激发，很短的时间内进行信号采样得到的就是质子密度图。但是下图显示了不同物质信号相同，并没有给出哪里体现了质子密度差异。其实线圈接收到的信号是这个信号的</font>N倍，N就是质子数量，因此傅立叶变换后，每个频率的信号强度正比于空间中某个位置的质子数。</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="296" src="../assets/imgages/核磁共振原理5046.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">T</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">2</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">W：通过长TR和长TE组成。长TR使得所有组织净磁化最大，通过9</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">0</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">度激发后，再经过</font>T</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">2</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">弛豫体现不同组织的信号值差异。该序列只反应</font>T</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">2</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">弛豫下的最大组织对比度。</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=MsoNormal align=justify>
        <img width="554" height="291" src="../assets/imgages/核磁共振原理5129.png"><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify
        ><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span></p>
      <p class=MsoNormal align=justify><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"><font face="仿宋">参考文献：</font></span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:12.0000pt;mso-font-kerning:0.0000pt;"></span></p>
      <p class=18 align=justify style="margin-left:21.0000pt;text-indent:-21.0000pt;mso-char-indent-count:0.0000;
text-align:justify;text-justify:inter-ideograph;mso-list:l0 level1 lfo1;"><![if !supportLists]><span style="font-family:仿宋;mso-bidi-font-family:宋体;font-size:10.0000pt;
mso-font-kerning:0.0000pt;"><span style='mso-list:Ignore;'>[1]<span>&nbsp;</span></span></span><![endif]><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:10.0000pt;mso-font-kerning:0.0000pt;">LARS G. HANSON. Is Quantum Mechanics necessary for understanding</span><span
        style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:10.0000pt;mso-font-kerning:0.0000pt;">&nbsp;</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:10.0000pt;mso-font-kerning:0.0000pt;">Magnetic Resonance?</span><span style="mso-spacerun:'yes';font-family:仿宋;mso-bidi-font-family:宋体;
font-size:10.0000pt;mso-font-kerning:0.0000pt;"></span></p>
    </div>
  </div>
</template>

<script>
	import { Table } from 'view-design';
	export default {
		name: 'test',
		components: {
			Table
		},
		data() {
			return {
				tableData1: [
					{
						index: 'Average FROC Score',
						grade: '0.6449'
					},
					{
						index: 'Sensitivity at 8 False Positives per Scan',
						grade: '0.8803'
					}
				],
				tableData2: [
					{
						index: 'Average FROC Score',
						grade: '0.7653'
					},
					{
						index: 'Sensitivity at 8 False Positives per Scan',
						grade: '0.9507'
					}
				],
				columns1: [
					{
						title: 'index',
						key: 'index'
					},
					{
						title: 'grade',
						key: 'grade'
					}
				],
			};
		}
	};
</script>

<style scoped>
  .box {
    padding: 30px;
    display: flex;
    width: 100%;
  }

  .box-item {
    flex: 1;
    margin-left: 30px;
  }
</style>
