import {  PanelData } from '@grafana/data';
import { SimpleOptions } from 'types';

import { DataGeneradores } from 'components/variables/variables';
//import modo_controlStyles from 'styles/modoControlStyles';
import alarmasStyles from 'styles/alarmsStyles';
import estadoStyles from 'styles/estadoStyles';
//import { QueryField } from '@grafana/ui';

const dataGeneradores = (data: PanelData, options: SimpleOptions, ): DataGeneradores => {
     
  console.log('data: ', data);
  console.log('options: ', options);
  

//-------------------------------------------VARIABLES DE ESTADOS----------------------------------------------    
//ESTADOS
/*
let st_on = estadoStyles.ok;
let st_off = estadoStyles.sinConexion;
*/
//ALARMS

let alarm_on = alarmasStyles.trip;
let alarm_off = alarmasStyles.warn;



//WARNINGS
/*let warning_on = alarmasStyles.on1;
let warning_off = alarmasStyles.sinconexion;*/
//
//-----------------------------------------------------------------------------------------------------------
//----------------------------------------ESTADOS Y ALARMAS DE GENERADORES------------------------------------

//let st_gen = [];

let ala_stop_gen= [];
let f_start_gen= [];
let ala_hv_gen= [];
let ala_lv_gen= [];
let ala_oil_p_gen= [];
let ala_o_spd_gen= [];
let ala_u_spd_gen= [];
let ala_temp_gen= [];
let ala_rest_gen= [];
let ala_loss_spd_gen= [];
let ala_lf_gen= [];
let ala_hcur_gen= [];


for (let i = 1; i <= 6; i++) {
//---------------------------------------------------ESTADO---------------------------------------------------------//
//st_gen[i] =   data.series.find(({ name }) => name?.includes('ST_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;


//---------------------------------------------------ALARMAS---------------------------------------------------------//
ala_stop_gen[i] = data.series.find(({ name }) => name?.includes('ALA_STOP_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
f_start_gen[i] = data.series.find(({ name }) => name?.includes('F_START_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
ala_hv_gen[i] = data.series.find(({ name }) => name?.includes('ALA_HV_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
ala_lv_gen[i] = data.series.find(({ name }) => name?.includes('ALA_LV_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
ala_oil_p_gen[i] = data.series.find(({ name }) => name?.includes('ALA_OIL_P_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
ala_o_spd_gen[i] = data.series.find(({ name }) => name?.includes('ALA_O_SPD_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
ala_u_spd_gen[i] = data.series.find(({ name }) => name?.includes('ALA_U_SPD_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
ala_temp_gen[i] = data.series.find(({ name }) => name?.includes('ALA_TEMP_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
ala_rest_gen[i] = data.series.find(({ name }) => name?.includes('ALA_REST_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
ala_loss_spd_gen[i] = data.series.find(({ name }) => name?.includes('ALA_LOSS_SPD_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
ala_lf_gen[i] = data.series.find(({ name }) => name?.includes('ALA_LF_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;
ala_hcur_gen[i] = data.series.find(({ name }) => name?.includes('ALA_HCUR_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;


 /*
  if (st_gen[i] === 1) {
      st_gen[i] = st_on;
      }   else {
      st_gen[i] = st_off;
      }
    }
    */
    
      

  if (ala_stop_gen[i] === 1) {
        ala_stop_gen[i] = alarm_on;
        }   else {
          ala_stop_gen[i] = alarm_off;
        }

  if (f_start_gen[i] === 1) {
      f_start_gen[i] = alarm_on;
       }   else {
      f_start_gen[i] = alarm_off;
      }    

  if (ala_hv_gen[i] === 1) {
      ala_hv_gen[i] = alarm_on;
      }   else {
        ala_hv_gen[i] = alarm_off;
      }

  if (ala_lv_gen[i] === 1) {
      ala_lv_gen[i] = alarm_on;
      }   else {
        ala_lv_gen[i] = alarm_off;
      }

  if (ala_oil_p_gen[i] === 1) {
      ala_oil_p_gen[i] = alarm_on;
      }   else {
        ala_oil_p_gen[i] = alarm_off;
      }

  if (ala_o_spd_gen[i] === 1) {
      ala_o_spd_gen[i] = alarm_on;
      }   else {
        ala_o_spd_gen[i] = alarm_off;
      }

  if (ala_u_spd_gen[i] === 1) {
      ala_u_spd_gen[i] = alarm_on;
      }  else {
        ala_u_spd_gen[i] = alarm_off;
      }

  if (ala_temp_gen[i] === 1) {
      ala_temp_gen[i] = alarm_on;
      }  else {
        ala_temp_gen[i] = alarm_off;
      }

  if (ala_rest_gen[i] === 1) {
    ala_rest_gen[i] = alarm_on;
      }  else {
        ala_rest_gen[i] = alarm_off;
      }

  if (ala_loss_spd_gen[i] === 1) {
      ala_loss_spd_gen[i] = alarm_on;
      }  else {
        ala_loss_spd_gen[i] = alarm_off;
      }
  
  if (ala_lf_gen[i] === 1) {
      ala_lf_gen[i] = alarm_on;
      }  else {
        ala_lf_gen[i] = alarm_off;
      }

  if (ala_hcur_gen[i] === 1) {
      ala_hcur_gen[i] = alarm_on;
      }  else {
        ala_hcur_gen[i] = alarm_off;
      }

  if (ala_lf_gen[i] === 1) {
      ala_lf_gen[i] = alarm_on;
      }  else {
        ala_lf_gen[i] = alarm_off;
      }

}



//VARIABLES DEL GENERADOR 


let freq_gen = [];
let control_m_gen = [];
let t_wats_gen = [];
let t_va_gen = [];
let kva_h_gen = [];
let kvar_h_gen = [];

let fuel_l_gen = [];

let cur_avg_gen = [];


let vol_avg_gen = [];



for (let i = 1; i <= 6; i++) {

  
    freq_gen[i] = data.series.find(({ name }) => name?.includes('FREQ_GEN'))?.fields[1].state?.calcs?.lastNotNull;

    control_m_gen[i] = data.series.find(({ name }) => name?.includes('CONTROL_M_GEN'))?.fields[1].state?.calcs?.lastNotNull;

    t_wats_gen[i] = data.series.find(({ name }) => name?.includes('TOT_WATS_GEN'))?.fields[1].state?.calcs?.lastNotNull;     

    t_va_gen[i] = data.series.find(({ name }) => name?.includes('TOT_VA_GEN' + i))?.fields[1].state?.calcs?.lastNotNull;  
    
    kva_h_gen[i] = data.series.find(({ name }) => name?.includes('HOURS_KVA_GEN' + i))?.fields[1].state?.calcs?.lastNotNull; 

    kvar_h_gen[i] = data.series.find(({ name }) => name?.includes('HOURS_KVAR_GEN' + i))?.fields[1].state?.calcs?.lastNotNull; 
    

    fuel_l_gen[i] = data.series.find(({ name }) => name?.includes('FUEL_LVL_GEN' + i))?.fields[1].state?.calcs?.lastNotNull; 
    

    cur_avg_gen[i] = data.series.find(({ name }) => name?.includes('CUR_AVG_GEN' + i))?.fields[1].state?.calcs?.lastNotNull; 

    vol_avg_gen[i] = data.series.find(({ name }) => name?.includes('LLVOL_AVG_GEN'+ i))?.fields[1].state?.calcs?.lastNotNull;     
     

    if (freq_gen[i] === null || freq_gen[i] === 0) {
      freq_gen[i] = 0;
        }   else {
          freq_gen[i] = parseFloat(freq_gen[i]).toFixed(1);
        } 
    if (control_m_gen[i] === null || control_m_gen[i] === 0) {
      control_m_gen[i] = 0;
        }   else {
          control_m_gen[i] = parseFloat(control_m_gen[i]).toFixed(1);
        } 
    
        if (t_wats_gen[i] === null || t_wats_gen[i] === 0) {
          t_wats_gen[i] = 0;
          }   else {
              t_wats_gen[i] = parseFloat(t_wats_gen[i]).toFixed(1);
          } 
      if (t_va_gen[i] === null || t_va_gen[i] === 0) {
          t_va_gen[i] = 0;
          }   else {
              t_va_gen[i] = parseFloat(t_va_gen[i]).toFixed(1);
          } 

    if (kva_h_gen[i] === null || kva_h_gen[i] === 0) {
      kva_h_gen[i] = 0;
          }   else {
            kva_h_gen[i] = parseFloat(kva_h_gen[i]).toFixed(1);
          } 
    
    if (kvar_h_gen[i] === null || kvar_h_gen[i] === 0) {
      kvar_h_gen[i] = 0;
        }   else {
          kvar_h_gen[i] = parseFloat(kvar_h_gen[i]).toFixed(1);
        } 
    if (fuel_l_gen[i] === null || fuel_l_gen[i] === 0) {
      fuel_l_gen[i] = 0;
        }   else {
          fuel_l_gen[i] = parseFloat(fuel_l_gen[i]).toFixed(1);
        } 

    if (cur_avg_gen[i] === null || cur_avg_gen[i] === 0) {
      cur_avg_gen[i] = 0;
          }   else {
            cur_avg_gen[i] = parseFloat(cur_avg_gen[i]).toFixed(1);
          }        
         
    if (vol_avg_gen[i] === null || vol_avg_gen[i] === 0) {
      vol_avg_gen[i] = 0;
          }   else {
            vol_avg_gen[i] = parseFloat(vol_avg_gen[i]).toFixed(1);
          } 

         
    }


    //VARIABLES DE LOS TDLOWS

    
    
      
      let volt_ff_td0 = data.series.find(({ name }) => name?.includes('TDLOW_VFF0'))?.fields[1].state?.calcs?.lastNotNull;    
      let volt_fn_td0 = data.series.find(({ name }) => name?.includes('TDLOW_VFN0'))?.fields[1].state?.calcs?.lastNotNull;
      let cur_td0 = data.series.find(({ name }) => name?.includes('TDLOW_AMP0'))?.fields[1].state?.calcs?.lastNotNull;
      let kw_td0 = data.series.find(({ name }) => name?.includes('TDLOW_KW0'))?.fields[1].state?.calcs?.lastNotNull;
      let carga_td0 = data.series.find(({ name }) => name?.includes('TDLOW_CARGA0'))?.fields[1].state?.calcs?.lastNotNull;
      let kvar_td0 = data.series.find(({ name }) => name?.includes('TDLOW_KVAR0'))?.fields[1].state?.calcs?.lastNotNull;

      let volt_ff_td1 = data.series.find(({ name }) => name?.includes('TDLOW_1_VFF'))?.fields[1].state?.calcs?.lastNotNull; 
      let cur_td1 = data.series.find(({ name }) => name?.includes('TDLOW_1_AMP'))?.fields[1].state?.calcs?.lastNotNull;
      let kw_td1 = data.series.find(({ name }) => name?.includes('TDLOW_1_KW'))?.fields[1].state?.calcs?.lastNotNull;
      let kva_td1 = data.series.find(({ name }) => name?.includes('TDLOW_1_KVA'))?.fields[1].state?.calcs?.lastNotNull;

      let volt_ff_td2 = data.series.find(({ name }) => name?.includes('TDLOW_2_VFF'))?.fields[1].state?.calcs?.lastNotNull; 
      let cur_td2 = data.series.find(({ name }) => name?.includes('TDLOW_2_AMP'))?.fields[1].state?.calcs?.lastNotNull;
      let kw_td2 = data.series.find(({ name }) => name?.includes('TDLOW_2_KW'))?.fields[1].state?.calcs?.lastNotNull;
      let kva_td2 = data.series.find(({ name }) => name?.includes('TDLOW_2_KVA'))?.fields[1].state?.calcs?.lastNotNull;
      

//-----------------------------------------------------ALARMAS----------------------------------------------------//


// ---------------------------------------------------------------
  let generadores: DataGeneradores = {


    gen1:{
        boton_gen1: estadoStyles.sinConexion,
        color_gen1: estadoStyles.sinConexion,
        barra1_gen1:estadoStyles.sinConexion,
        contacto_gen1: estadoStyles.sinConexion,
        barra2_gen1: estadoStyles.sinConexion,
        modo_gen1:'',
        volt_gen1: 0,
        amp_gen1: 0,
        kw_gen1: 0,
        carga_gen1: 0,
        diesel_gen1: 0,
    },

    gen2:{
      boton_gen2: estadoStyles.sinConexion,
      color_gen2: estadoStyles.sinConexion,
      barra1_gen2:estadoStyles.sinConexion,
      contacto_gen2: estadoStyles.sinConexion,
      barra2_gen2: estadoStyles.sinConexion,
      modo_gen2:'',
      volt_gen2: 0,
      amp_gen2: 0,
      kw_gen2: 0,
      carga_gen2: 0,
      diesel_gen2: 0,
  },

  gen3:{
    boton_gen3: estadoStyles.sinConexion,
    color_gen3: estadoStyles.sinConexion,
    barra1_gen3:estadoStyles.sinConexion,
    contacto_gen3: estadoStyles.sinConexion,
    barra2_gen3: estadoStyles.sinConexion,
    modo_gen3:'',
    volt_gen3: 0,
    amp_gen3: 0,
    kw_gen3: 0,
    carga_gen3: 0,
    diesel_gen3: 0,
},

gen4:{
  boton_gen4: estadoStyles.sinConexion,
  color_gen4: estadoStyles.sinConexion,
  barra1_gen4:estadoStyles.sinConexion,
  contacto_gen4: estadoStyles.sinConexion,
  barra2_gen4: estadoStyles.sinConexion,
  modo_gen4:'',
  volt_gen4: 0,
  amp_gen4: 0,
  kw_gen4: 0,
  carga_gen4: 0,
  diesel_gen4: 0,
},

gen5:{
  boton_gen5: estadoStyles.sinConexion,
  color_gen5: estadoStyles.sinConexion,
  barra1_gen5:estadoStyles.sinConexion,
  contacto_gen5: estadoStyles.sinConexion,
  barra2_gen5: estadoStyles.sinConexion,
  modo_gen5:'',
  volt_gen5: 0,
  amp_gen5: 0,
  kw_gen5: 0,
  carga_gen5: 0,
  diesel_gen5: 0,
},

gen6:{
  boton_gen6: estadoStyles.sinConexion,
  color_gen6: estadoStyles.sinConexion,
  barra1_gen6:estadoStyles.sinConexion,
  contacto_gen6: estadoStyles.sinConexion,
  barra2_gen6: estadoStyles.sinConexion,
  modo_gen6:'',
  volt_gen6: 0,
  amp_gen6: 0,
  kw_gen6: 0,
  carga_gen6: 0,
  diesel_gen6: 0,
},

tdlow_A0:{
    boton_tdlow_A0: estadoStyles.sinConexion,
    color_tdlow_A0_torre: estadoStyles.sinConexion,
    color_tdlow_A0_indust: estadoStyles.sinConexion,
    modo_tdlow_A0:'',
    voltff_tdlow_A0: 0,
    voltfn_tdlow_A0: 0,
    amp_tdlow_A0: 0,
    kw_tdlow_A0: 0,
    carga_tdlow_A0: 0,
    kvar_tdlow_A0: 0,
},

tdlow_A1:{
    boton_tdlow_A1: estadoStyles.sinConexion,
    piloto_tdlow_A1: estadoStyles.sinConexion,
    volt_tdlow_A1: 0,
    amp_tdlow_A1: 0,
    kw_tdlow_A1: 0,
    kva_tdlow_A1: 0,
},

tdlow_A2:{
    boton_tdlow_A2: estadoStyles.sinConexion,
    piloto_tdlow_A2: estadoStyles.sinConexion,
    volt_tdlow_A2: 0,
    amp_tdlow_A2: 0,
    kw_tdlow_A2: 0,
    kva_tdlow_A2: 0,
},

tableros:{
    piloto1_ats3a: estadoStyles.sinConexion,
    piloto2_ats3a: estadoStyles.sinConexion,
    piloto1_ats4a: estadoStyles.sinConexion,
    piloto2_ats4a: estadoStyles.sinConexion,
    piloto1_tpdu1a: estadoStyles.sinConexion,
    piloto2_tpdu1a: estadoStyles.sinConexion,
    piloto1_tpdu2a: estadoStyles.sinConexion,
    piloto2_tpdu2a: estadoStyles.ok,
},
    
}

//-----------------------------------------------------ESTADO DEL SISTEMA----------------------------------------------------//

//
generadores.gen1.boton_gen1= vol_avg_gen[1] === 0 ? estadoStyles.sinConexion : estadoStyles.ok;
generadores.gen2.boton_gen2= vol_avg_gen[2] === 0 ? estadoStyles.sinConexion : estadoStyles.ok;
generadores.gen3.boton_gen3= vol_avg_gen[3] === 0 ? estadoStyles.sinConexion : estadoStyles.ok;
generadores.gen4.boton_gen4= vol_avg_gen[4] === 0 ? estadoStyles.sinConexion : estadoStyles.ok;
generadores.gen5.boton_gen5= vol_avg_gen[5] === 0 ? estadoStyles.sinConexion : estadoStyles.ok;
generadores.gen6.boton_gen6= vol_avg_gen[6] === 0 ? estadoStyles.sinConexion : estadoStyles.ok;

//-----------------------------------------------------ALARMAS----------------------------------------------------//



if (
  
  // ALARMAS GEN1 
  ala_stop_gen[1] === 2||f_start_gen[1] === 2 || ala_hv_gen[1] === 2 || ala_lv_gen[1] === 2 || ala_oil_p_gen[1] === 2 ||ala_o_spd_gen[1] === 2 || ala_u_spd_gen[1] === 2 || ala_temp_gen[1] === 2 || ala_rest_gen[1] === 2 || ala_loss_spd_gen[1] === 2 || ala_lf_gen[1] === 2 || ala_hcur_gen[1]  === 2 || 

  ala_stop_gen[1] === 3||f_start_gen[1] === 3 || ala_hv_gen[1] === 3 || ala_lv_gen[1] === 3 || ala_oil_p_gen[1] === 3 ||ala_o_spd_gen[1] === 3 || ala_u_spd_gen[1] === 3 || ala_temp_gen[1] === 3 || ala_rest_gen[1] === 3 || ala_loss_spd_gen[1] === 3 || ala_lf_gen[1] === 3 || ala_hcur_gen[1]  === 3 || 

  ala_stop_gen[1] === 4||f_start_gen[1] === 4 || ala_hv_gen[1] === 4 || ala_lv_gen[1] === 4 || ala_oil_p_gen[1] === 4 ||ala_o_spd_gen[1] === 4 || ala_u_spd_gen[1] === 4 || ala_temp_gen[1] === 4 || ala_rest_gen[1] === 4 || ala_loss_spd_gen[1] === 4 || ala_lf_gen[1] === 4 || ala_hcur_gen[1]  === 4 || 

  // ALARMAS GEN12
  ala_stop_gen[2] === 2||f_start_gen[2] === 2 || ala_hv_gen[2] === 2 || ala_lv_gen[2] === 2 || ala_oil_p_gen[2] === 2 ||ala_o_spd_gen[2] === 2 || ala_u_spd_gen[2] === 2 || ala_temp_gen[2] === 2 || ala_rest_gen[2] === 2 || ala_loss_spd_gen[2] === 2 || ala_lf_gen[2] === 2 || ala_hcur_gen[2]  === 2 || 

  ala_stop_gen[2] === 3||f_start_gen[2] === 3 || ala_hv_gen[2] === 3 || ala_lv_gen[2] === 3 || ala_oil_p_gen[2] === 3 ||ala_o_spd_gen[2] === 3 || ala_u_spd_gen[2] === 3 || ala_temp_gen[2] === 3 || ala_rest_gen[2] === 3 || ala_loss_spd_gen[2] === 3 || ala_lf_gen[2] === 3 || ala_hcur_gen[2]  === 3 || 

  ala_stop_gen[2] === 4||f_start_gen[2] === 4 || ala_hv_gen[2] === 4 || ala_lv_gen[2] === 4 || ala_oil_p_gen[2] === 4 ||ala_o_spd_gen[2] === 4 || ala_u_spd_gen[2] === 4 || ala_temp_gen[2] === 4 || ala_rest_gen[2] === 4 || ala_loss_spd_gen[2] === 4 || ala_lf_gen[2] === 4 || ala_hcur_gen[2]  === 4 || 

  // ALARMAS GEN3
  ala_stop_gen[3] === 2||f_start_gen[3] === 2 || ala_hv_gen[3] === 2 || ala_lv_gen[3] === 2 || ala_oil_p_gen[3] === 2 ||ala_o_spd_gen[3] === 2 || ala_u_spd_gen[3] === 2 || ala_temp_gen[3] === 2 || ala_rest_gen[3] === 2 || ala_loss_spd_gen[3] === 2 || ala_lf_gen[3] === 2 || ala_hcur_gen[3]  === 2 || 

  ala_stop_gen[3] === 3||f_start_gen[3] === 3 || ala_hv_gen[3] === 3 || ala_lv_gen[3] === 3 || ala_oil_p_gen[3] === 3 ||ala_o_spd_gen[3] === 3 || ala_u_spd_gen[3] === 3 || ala_temp_gen[3] === 3 || ala_rest_gen[3] === 3 || ala_loss_spd_gen[3] === 3 || ala_lf_gen[3] === 3 || ala_hcur_gen[3]  === 3 || 

  ala_stop_gen[3] === 4||f_start_gen[3] === 4 || ala_hv_gen[3] === 4 || ala_lv_gen[3] === 4 || ala_oil_p_gen[3] === 4 ||ala_o_spd_gen[3] === 4 || ala_u_spd_gen[3] === 4 || ala_temp_gen[3] === 4 || ala_rest_gen[3] === 4 || ala_loss_spd_gen[3] === 4 || ala_lf_gen[3] === 4 || ala_hcur_gen[3]  === 4 || 

  // ALARMAS GEN4
  ala_stop_gen[4] === 2||f_start_gen[4] === 2 || ala_hv_gen[4] === 2 || ala_lv_gen[4] === 2 || ala_oil_p_gen[4] === 2 ||ala_o_spd_gen[4] === 2 || ala_u_spd_gen[4] === 2 || ala_temp_gen[4] === 2 || ala_rest_gen[4] === 2 || ala_loss_spd_gen[4] === 2 || ala_lf_gen[4] === 2 || ala_hcur_gen[4]  === 2 || 

  ala_stop_gen[4] === 3||f_start_gen[4] === 3 || ala_hv_gen[4] === 3 || ala_lv_gen[4] === 3 || ala_oil_p_gen[4] === 3 ||ala_o_spd_gen[4] === 3 || ala_u_spd_gen[4] === 3 || ala_temp_gen[4] === 3 || ala_rest_gen[4] === 3 || ala_loss_spd_gen[4] === 3 || ala_lf_gen[4] === 3 || ala_hcur_gen[4]  === 3 || 

  ala_stop_gen[4] === 4||f_start_gen[4] === 4 || ala_hv_gen[4] === 4 || ala_lv_gen[4] === 4 || ala_oil_p_gen[4] === 4 ||ala_o_spd_gen[4] === 4 || ala_u_spd_gen[4] === 4 || ala_temp_gen[4] === 4 || ala_rest_gen[4] === 4 || ala_loss_spd_gen[4] === 4 || ala_lf_gen[4] === 4 || ala_hcur_gen[4]  === 4 || 

  // ALARMAS GEN5
  ala_stop_gen[5] === 2||f_start_gen[5] === 2 || ala_hv_gen[5] === 2 || ala_lv_gen[5] === 2 || ala_oil_p_gen[5] === 2 ||ala_o_spd_gen[5] === 2 || ala_u_spd_gen[5] === 2 || ala_temp_gen[5] === 2 || ala_rest_gen[5] === 2 || ala_loss_spd_gen[5] === 2 || ala_lf_gen[5] === 2 || ala_hcur_gen[5]  === 2 || 

  ala_stop_gen[5] === 3||f_start_gen[5] === 3 || ala_hv_gen[5] === 3 || ala_lv_gen[5] === 3 || ala_oil_p_gen[5] === 3 ||ala_o_spd_gen[5] === 3 || ala_u_spd_gen[5] === 3 || ala_temp_gen[5] === 3 || ala_rest_gen[5] === 3 || ala_loss_spd_gen[5] === 3 || ala_lf_gen[5] === 3 || ala_hcur_gen[5]  === 3 || 

  ala_stop_gen[5] === 4||f_start_gen[5] === 4 || ala_hv_gen[5] === 4 || ala_lv_gen[5] === 4 || ala_oil_p_gen[5] === 4 ||ala_o_spd_gen[5] === 4 || ala_u_spd_gen[5] === 4 || ala_temp_gen[5] === 4 || ala_rest_gen[5] === 4 || ala_loss_spd_gen[5] === 4 || ala_lf_gen[5] === 4 || ala_hcur_gen[5]  === 4 || 

  // ALARMAS GEN6
  ala_stop_gen[6] === 2||f_start_gen[6] === 2 || ala_hv_gen[6] === 2 || ala_lv_gen[6] === 2 || ala_oil_p_gen[6] === 2 ||ala_o_spd_gen[6] === 2 || ala_u_spd_gen[6] === 2 || ala_temp_gen[6] === 2 || ala_rest_gen[6] === 2 || ala_loss_spd_gen[6] === 2 || ala_lf_gen[6] === 2 || ala_hcur_gen[6]  === 2 || 

  ala_stop_gen[6] === 3||f_start_gen[6] === 3 || ala_hv_gen[6] === 3 || ala_lv_gen[6] === 3 || ala_oil_p_gen[6] === 3 ||ala_o_spd_gen[6] === 3 || ala_u_spd_gen[6] === 3 || ala_temp_gen[6] === 3 || ala_rest_gen[6] === 3 || ala_loss_spd_gen[6] === 3 || ala_lf_gen[6] === 3 || ala_hcur_gen[6]  === 3 || 

  ala_stop_gen[6] === 4||f_start_gen[6] === 4 || ala_hv_gen[6] === 4 || ala_lv_gen[6] === 4 || ala_oil_p_gen[6] === 4 ||ala_o_spd_gen[6] === 4 || ala_u_spd_gen[6] === 4 || ala_temp_gen[6] === 4 || ala_rest_gen[6] === 4 || ala_loss_spd_gen[6] === 4 || ala_lf_gen[6] === 4 || ala_hcur_gen[6]  === 4 
  
  )

{
  //generadores.datos_principales.rectan_gen = estadoStyles.alarma,
  //generadores.datos_principales.text_estado = 'ALARMADO'

  generadores.gen1.color_gen1= estadoStyles.alarma,
  generadores.gen2.color_gen2= estadoStyles.alarma,
  generadores.gen3.color_gen3= estadoStyles.alarma,
  generadores.gen4.color_gen4= estadoStyles.alarma,
  generadores.gen5.color_gen5= estadoStyles.alarma,
  generadores.gen6.color_gen6= estadoStyles.alarma,
  
  generadores.gen1.barra1_gen1= estadoStyles.alarma,
  generadores.gen2.barra1_gen2= estadoStyles.alarma,
  generadores.gen3.barra1_gen3= estadoStyles.alarma,
  generadores.gen4.barra1_gen4= estadoStyles.alarma,
  generadores.gen5.barra1_gen5= estadoStyles.alarma,
  generadores.gen6.barra1_gen6= estadoStyles.alarma,
  
  generadores.gen1.contacto_gen1= estadoStyles.alarma,
  generadores.gen2.contacto_gen2= estadoStyles.alarma,
  generadores.gen3.contacto_gen3= estadoStyles.alarma,
  generadores.gen4.contacto_gen4= estadoStyles.alarma,
  generadores.gen5.contacto_gen5= estadoStyles.alarma,
  generadores.gen6.contacto_gen6= estadoStyles.alarma,
  
  generadores.gen1.barra2_gen1= estadoStyles.alarma,
  generadores.gen2.barra2_gen2= estadoStyles.alarma,
  generadores.gen3.barra2_gen3= estadoStyles.alarma,
  generadores.gen4.barra2_gen4= estadoStyles.alarma,
  generadores.gen5.barra2_gen5= estadoStyles.alarma,
  generadores.gen6.barra2_gen6= estadoStyles.alarma
  
  
} 


else (

   generadores.gen1.color_gen1 = vol_avg_gen[1] === 0 ? estadoStyles.sinConexion : estadoStyles.ok,
   generadores.gen2.color_gen2 = vol_avg_gen[2] === 0 ? estadoStyles.sinConexion : estadoStyles.ok, 
   generadores.gen3.color_gen3 = vol_avg_gen[3] === 0 ? estadoStyles.sinConexion : estadoStyles.ok, 
   generadores.gen4.color_gen4 = vol_avg_gen[4] === 0 ? estadoStyles.sinConexion : estadoStyles.ok, 
   generadores.gen5.color_gen5 = vol_avg_gen[5] === 0 ? estadoStyles.sinConexion : estadoStyles.ok, 
   generadores.gen6.color_gen6 = vol_avg_gen[6] === 0 ? estadoStyles.sinConexion : estadoStyles.ok
   
   )






//-----------------------------------------------------FUNCIONABILIDAD----------------------------------------------------//




generadores.gen1.modo_gen1= control_m_gen[1];
generadores.gen2.modo_gen2= control_m_gen[2];
generadores.gen3.modo_gen3= control_m_gen[3];
generadores.gen4.modo_gen4= control_m_gen[4];
generadores.gen5.modo_gen5= control_m_gen[5];
generadores.gen6.modo_gen6= control_m_gen[6];

generadores.gen1.volt_gen1= vol_avg_gen[1];
generadores.gen2.volt_gen2= vol_avg_gen[2];
generadores.gen3.volt_gen3= vol_avg_gen[3];
generadores.gen4.volt_gen4= vol_avg_gen[4];
generadores.gen5.volt_gen5= vol_avg_gen[5];
generadores.gen6.volt_gen6= vol_avg_gen[6];

generadores.gen1.amp_gen1= cur_avg_gen[1];
generadores.gen2.amp_gen2= cur_avg_gen[2];
generadores.gen3.amp_gen3= cur_avg_gen[3];
generadores.gen4.amp_gen4= cur_avg_gen[4];
generadores.gen5.amp_gen5= cur_avg_gen[5];
generadores.gen6.amp_gen6= cur_avg_gen[6];

generadores.gen1.kw_gen1= t_wats_gen[1];
generadores.gen2.kw_gen2= t_wats_gen[2];
generadores.gen3.kw_gen3= t_wats_gen[3];
generadores.gen4.kw_gen4= t_wats_gen[4];
generadores.gen5.kw_gen5= t_wats_gen[5];
generadores.gen6.kw_gen6= t_wats_gen[6];

generadores.gen1.carga_gen1= t_va_gen[1];
generadores.gen2.carga_gen2= t_va_gen[2];
generadores.gen3.carga_gen3= t_va_gen[3];
generadores.gen4.carga_gen4= t_va_gen[4];
generadores.gen5.carga_gen5= t_va_gen[5];
generadores.gen6.carga_gen6= t_va_gen[6];

generadores.gen1.diesel_gen1= fuel_l_gen[1];
generadores.gen2.diesel_gen2= fuel_l_gen[2];
generadores.gen3.diesel_gen3= fuel_l_gen[3];
generadores.gen4.diesel_gen4= fuel_l_gen[4];
generadores.gen5.diesel_gen5= fuel_l_gen[5];
generadores.gen6.diesel_gen6= fuel_l_gen[6];


// DATOS DE LOS TDLOWS 

generadores.tdlow_A0.voltff_tdlow_A0 = Number.parseFloat(volt_ff_td0?.toFixed(2));
generadores.tdlow_A0.voltfn_tdlow_A0 = Number.parseFloat(volt_fn_td0?.toFixed(2));
generadores.tdlow_A0.amp_tdlow_A0 = Number.parseFloat(cur_td0?.toFixed(2));
generadores.tdlow_A0.kw_tdlow_A0 = Number.parseFloat(kw_td0?.toFixed(2));
generadores.tdlow_A0.carga_tdlow_A0 = Number.parseFloat(carga_td0?.toFixed(2));
generadores.tdlow_A0.kvar_tdlow_A0 = Number.parseFloat(kvar_td0?.toFixed(2));

generadores.tdlow_A1.volt_tdlow_A1 = Number.parseFloat(volt_ff_td1?.toFixed(2));
generadores.tdlow_A1.amp_tdlow_A1 = Number.parseFloat(cur_td1?.toFixed(2));
generadores.tdlow_A1.kw_tdlow_A1 = Number.parseFloat(kw_td1?.toFixed(2));
generadores.tdlow_A1.kva_tdlow_A1 = Number.parseFloat(kva_td1?.toFixed(2));

generadores.tdlow_A2.volt_tdlow_A2 = Number.parseFloat(volt_ff_td2?.toFixed(2));
generadores.tdlow_A2.amp_tdlow_A2 = Number.parseFloat(cur_td2?.toFixed(2));
generadores.tdlow_A2.kw_tdlow_A2 = Number.parseFloat(kw_td2?.toFixed(2));
generadores.tdlow_A2.kva_tdlow_A2 = Number.parseFloat(kva_td2?.toFixed(2));




  console.log(generadores);

  



    return generadores;
};


export default dataGeneradores;
