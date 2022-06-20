let ptop = 0;
let pleft = 0;
const elSizeFieldX = document.getElementById('sizeFieldX');
const elSizeFieldY = document.getElementById('sizeFieldY');
const elSubSizeField = document.getElementById('subSizeField');
const rootParam = document.querySelector('.param');
const elField = document.querySelector('.field');
const elOkField = document.querySelector('.okField');
const elOkObs = document.querySelector('.okObs');
const elConfirmObs =  document.querySelector('.confirmObs');
const elIdOkField = document.getElementById('okField');
const elSetFileSize = document.querySelector('.setFieldSize');
const elSetObstacle = document.querySelector('.setObstacle');
const elNumberObstacle = document.getElementById('numberObstacle');
const rootParamObstacle = document.querySelector('.paramObstacle');
const rootWarningObstacle = document.querySelector('.warningObstacle');
const elCoordinatesObstacle = document.querySelector('.coordinatesObstacle');
const elObsX1 = document.getElementById('obsX1');
const elObsY1 = document.getElementById('obsY1');
const elObsX2 = document.getElementById('obsX2');
const elObsY2 = document.getElementById('obsY2');
const elObsX3 = document.getElementById('obsX3');
const elObsY3 = document.getElementById('obsY3');
const elObsX4 = document.getElementById('obsX4');
const elObsY4 = document.getElementById('obsY4');
const elObs1 = document.getElementById('obs1');
const elObs2 = document.getElementById('obs2');
const elObs3 = document.getElementById('obs3');
const elObs4 = document.getElementById('obs4');
let varHtml ='';
let xField = 0;
let yField = 0;
let stepSet = 0;

elSubSizeField.addEventListener('click', () => {
    xField = Number(elSizeFieldX.value);
    yField = Number(elSizeFieldY.value);
    console.log(xField, yField);
    if (xField>=100 && xField<=1000 && yField>=100 && yField <=1000) {
        varHtml = '<p>Size of Field : X = ' + xField + 'px, Y = ' + yField + 'px.</p>';
        elField.style.width = xField + 'px';
        elField.style.height = yField + 'px';
        rootParam.innerHTML = varHtml;
        varHtml = '<p>Сonfirm (OK) if the field sizes are suitable </p>';
        rootParam.innerHTML += varHtml;
        elOkField.style.display = 'block';
    } else {
        rootParam.innerHTML = 'Enter correct data';
        elOkField.style.display = 'none';
    }
});

elIdOkField.addEventListener('click', () => {
    if (stepSet === 0) {
        elSetFileSize.style.display = 'none';
        elSetObstacle.style.display = 'block';
    } 
})

let numberObstacle = 0;
let obsX1 = -50;
let obsY1 = -50;
let obsX2 = -50;
let obsY2 = -50;
let obsX3 = -50;
let obsY3 = -50;
let obsX4 = -50;
let obsY4 = -50;

elNumberObstacle.addEventListener('change', () => {
    numberObstacle = Number(elNumberObstacle.value);
    elObsX1.style.display = 'inline-block';
    elObsY1.style.display = 'inline-block'; 
    elObsX2.style.display = 'inline-block';
    elObsY2.style.display = 'inline-block';
    elObsX3.style.display = 'inline-block';
    elObsY3.style.display = 'inline-block';
    elObsX4.style.display = 'inline-block';
    elObsY4.style.display = 'inline-block';
    if (numberObstacle>=0 && numberObstacle<=4) {
        rootParamObstacle.innerHTML = 'Enter the coordinates of Obstacle (the upper left corner) from 50px to: for X to:'+ (xField-50) + 'px, for Y to:' + (yField-50) + 'px';
        elCoordinatesObstacle.style.display = 'block';
        elOkObs.style.display = 'block';
        if (numberObstacle <= 3) {
            elObsX4.style.display = 'none';
            elObsY4.style.display = 'none';   
        }
        if (numberObstacle <= 2) {
            elObsX3.style.display = 'none';
            elObsY3.style.display = 'none';   
        }
        if (numberObstacle <= 1) {
            elObsX2.style.display = 'none';
            elObsY2.style.display = 'none';   
        }
        if (numberObstacle <= 0) {
            elObsX1.style.display = 'none';
            elObsY1.style.display = 'none';   
        }
    } else {
        rootParamObstacle.innerHTML = 'Enter correct data';
        elCoordinatesObstacle.style.display = 'none';
        elOkObs.style.display = 'none';
        }
    console.log(numberObstacle);
})

elOkObs.addEventListener('click', () => {
    rootWarningObstacle.innerHTML = '';
    if (numberObstacle >= 0) {
        elConfirmObs.style.display = 'block';
        if (numberObstacle >= 1) {
            obsX1 = Number(elObsX1.value);
            obsY1 = Number(elObsY1.value);
            if (obsX1<=(xField-50) && obsY1<=(yField-50)) {
                elObs1.style.display = 'block';
                elObs1.style.top = obsY1 + 'px';
                elObs1.style.left = obsX1 + 'px';
                if (numberObstacle >= 2) {
                    obsX2 = Number(elObsX2.value);
                    obsY2 = Number(elObsY2.value);
                    if (obsX2<=(xField-50) && obsY2<=(yField-50)) {
                        elObs2.style.display = 'block';
                        elObs2.style.top = obsY2 + 'px';
                        elObs2.style.left = obsX2 + 'px';
                        if (numberObstacle >= 3) {
                            obsX3 = Number(elObsX3.value);
                            obsY3 = Number(elObsY3.value);
                            if (obsX3<=(xField-50) && obsY3<=(yField-50)) {
                                elObs3.style.display = 'block';
                                elObs3.style.top = obsY3 + 'px';
                                elObs3.style.left = obsX3 + 'px';
                                if (numberObstacle >= 3) {
                                    obsX4 = Number(elObsX4.value);
                                    obsY4 = Number(elObsY4.value);
                                    if (obsX3<=(xField-50) && obsY3<=(yField-50)) {
                                        elObs4.style.display = 'block';
                                        elObs4.style.top = obsY4 + 'px';
                                        elObs4.style.left = obsX4 + 'px';
                                    }else {
                                        rootWarningObstacle.innerHTML = 'WARNING!!! Enter correct parametres 4st obstance';
                                        elConfirmObs.style.display = 'none';
                                    }
                                }
                            }else {
                                rootWarningObstacle.innerHTML = 'WARNING!!! Enter correct parametres 3st obstance';
                                elConfirmObs.style.display = 'none';
                            }
                        }
                    } else {
                        rootWarningObstacle.innerHTML = 'WARNING!!! Enter correct parametres 2st obstance';
                        elConfirmObs.style.display = 'none';
                    }
                }
            } else {
                rootWarningObstacle.innerHTML = 'WARNING!!! Enter correct parametres 1st obstance';
                elConfirmObs.style.display = 'none';
            }
        }
    } 
})

elConfirmObs.addEventListener('click', () => {
    elSetObstacle.style.display = 'none';
})

// відпрацювання перемеіщення блоку

document.addEventListener("click", function(e) {
    if (e.target.className=="down key" && ptop<(yField-50)) {
        if (pleft>(obsX1-50) && pleft<(obsX1+50) && ptop===(obsY1-50)) {
            if (obsY1<yField-50) {
                obsY1 = obsY1+10;
                elObs1.style.top = obsY1 + 'px';
                ptop = ptop+10;
                document.getElementsByClassName('square')[0].style.top = ptop+'px';
            }
        } else {
            if (pleft>(obsX2-50) && pleft<(obsX2+50) && ptop===(obsY2-50)) {
                if (obsY2<yField-50) {
                    obsY2 = obsY2+10;
                    elObs2.style.top = obsY2 + 'px';
                    ptop = ptop+10;
                    document.getElementsByClassName('square')[0].style.top = ptop+'px';
                }
            } else {
               if (pleft>(obsX3-50) && pleft<(obsX3+50) && ptop===(obsY3-50)) {
                    if (obsY3<yField-50) {
                        obsY3 = obsY3+10;
                        elObs3.style.top = obsY3 + 'px';
                        ptop = ptop+10;
                        document.getElementsByClassName('square')[0].style.top = ptop+'px';
                    }
               } else {
                    if (pleft>(obsX4-50) && pleft<(obsX4+50) && ptop===(obsY4-50)) {
                        if (obsY4<yField-50) {
                            obsY4 = obsY4+10;
                            elObs4.style.top = obsY4 + 'px';
                            ptop = ptop+10;
                            document.getElementsByClassName('square')[0].style.top = ptop+'px';
                        }
                    } else {
                        ptop = ptop+10;
                        document.getElementsByClassName('square')[0].style.top = ptop+'px';
                    }
               }
            } 
        }   
    }
    if (e.target.className=="up key" && ptop>0) {
        if (pleft>(obsX1-50) && pleft<(obsX1+50) && ptop===(obsY1+50)) {
            if (obsY1>0) {
                obsY1 = obsY1-10;
                elObs1.style.top = obsY1 + 'px';
                ptop = ptop-10;
                document.getElementsByClassName('square')[0].style.top = ptop+'px';
            }
        } else {
            if (pleft>(obsX2-50) && pleft<(obsX2+50) && ptop===(obsY2+50)) {
                if (obsY2>0) {
                    obsY2 = obsY1-10;
                    elObs2.style.top = obsY2 + 'px';
                    ptop = ptop-10;
                    document.getElementsByClassName('square')[0].style.top = ptop+'px';
                }
            } else {
               if (pleft>(obsX3-50) && pleft<(obsX3+50) && ptop===(obsY3+50)) {
                    if (obsY3>0) {
                        obsY3 = obsY3-10;
                        elObs3.style.top = obsY3 + 'px';
                        ptop = ptop-10;
                        document.getElementsByClassName('square')[0].style.top = ptop+'px';
                    }
               } else {
                    if (pleft>(obsX4-50) && pleft<(obsX4+50) && ptop===(obsY4+50)) {
                        if (obsY4>0) {
                            obsY4 = obsY4-10;
                            elObs4.style.top = obsY4 + 'px';
                            ptop = ptop-10;
                            document.getElementsByClassName('square')[0].style.top = ptop+'px';
                        }
                    } else {
                        ptop = ptop-10;
                        document.getElementsByClassName('square')[0].style.top = ptop+'px';
                    }
               }
            } 
        }   
    }
    if (e.target.className=="right key" && pleft<(xField-50)) {
        if (pleft===(obsX1-50) && ptop>(obsY1-50) && ptop<(obsY1+50)) {
            if (obsX1<xField-50) {
                obsX1 = obsX1+10;
                elObs1.style.left = obsX1 + 'px';
                pleft = pleft+10;
                document.getElementsByClassName('square')[0].style.left = pleft+'px';
            }
        } else {
            if (pleft===(obsX2-50) && ptop>(obsY2-50) && ptop<(obsY2+50)) {
                if (obsX2<xField-50) {
                    obsX2 = obsX2+10;
                    elObs2.style.left = obsX2 + 'px';
                    pleft = pleft+10;
                    document.getElementsByClassName('square')[0].style.left = pleft+'px';
                }
            } else {
                if (pleft===(obsX3-50) && ptop>(obsY3-50) && ptop<(obsY3+50)) {
                    if (obsX3<xField-50) {
                        obsX3 = obsX3+10;
                        elObs3.style.left = obsX3 + 'px';
                        pleft = pleft+10;
                        document.getElementsByClassName('square')[0].style.left = pleft+'px';
                    }
                } else {
                    if (pleft===(obsX4-50) && ptop>(obsY4-50) && ptop<(obsY4+50)) {
                        if (obsX4<xField-50) {
                            obsX4 = obsX4+10;
                            elObs4.style.left = obsX4 + 'px';
                            pleft = pleft+10;
                            document.getElementsByClassName('square')[0].style.left = pleft+'px';
                        }
                    } else {
                        pleft = pleft+10;
                        document.getElementsByClassName('square')[0].style.left = pleft+'px';
                    }
               }
            } 
        }   
    }
    if (e.target.className=="left key" && pleft>0) {
        if (pleft===(obsX1+50) && ptop>(obsY1-50) && ptop<(obsY1+50)) {
            if (obsX1>0) {
                obsX1 = obsX1-10;
                elObs1.style.left = obsX1 + 'px';
                pleft = pleft-10;
                document.getElementsByClassName('square')[0].style.left = pleft+'px';
            }
        } else {
            if (pleft===(obsX2+50) && ptop>(obsY2-50) && ptop<(obsY2+50)) {
                if (obsX2>0) {
                    obsX2 = obsX2-10;
                    elObs2.style.left = obsX2 + 'px';
                    pleft = pleft-10;
                    document.getElementsByClassName('square')[0].style.left = pleft+'px';
                }
            } else {
                if (pleft===(obsX3+50) && ptop>(obsY3-50) && ptop<(obsY3+50)) {
                    if (obsX3>0) {
                        obsX3 = obsX3-10;
                        elObs3.style.left = obsX3 + 'px';
                        pleft = pleft-10;
                        document.getElementsByClassName('square')[0].style.left = pleft+'px';
                    }
                } else {
                    if (pleft===(obsX4+50) && ptop>(obsY4-50) && ptop<(obsY4+50)) {
                        if (obsX4>0) {
                            obsX4 = obsX4-10;
                            elObs4.style.left = obsX4 + 'px';
                            pleft = pleft-10;
                            document.getElementsByClassName('square')[0].style.left = pleft+'px';
                        }
                    } else {
                        pleft = pleft-10;
                        document.getElementsByClassName('square')[0].style.left = pleft+'px';
                    }
                }
            } 
        }   
    }
})