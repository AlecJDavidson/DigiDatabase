### Web scrapes and populates info about the digimon
### Currently not working

import os.path
import requests
from bs4 import BeautifulSoup

URL = 'http://digidb.io/digimon-list/'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')

results = soup.find("tbody",{"b":""})
res = (str(results).replace('<tbody>',''))
# print(res)
list_txt = open('src/assets/list.txt', 'w')
list_txt.write(str(res))
list_txt.close()
list_txt = open('src/assets/list.txt', 'r')

contents = list_txt.read()
contents = contents.split('</td>')

def get_digi_num():
    digi_num = (contents[0])
    digi_num_replace1 = digi_num.replace('<tr><td width="5%"><b>','')
    digi_num_replace2 = digi_num_replace1.replace('</b>','')
    digi_num = digi_num_replace2.strip()
    return(digi_num)
digi_num = get_digi_num()

def get_digi_sprite():
    digi_sprite = (contents[1])
    digi_sprite_replace1 = digi_sprite.replace('<td width="21%"> <img src="','')
    digi_sprite_replace2 = digi_sprite_replace1.replace('" style="vertical-align:middle;"> <a href="http://digidb.io/digimon-search/?request=1" style="font-weight: bold;">Kuramon</a></img>','')
    digi_sprite = digi_sprite_replace2.strip()
    return(digi_sprite)
digi_sprite = get_digi_sprite()

def get_digi_name():
    digi_name = (contents[1])
    digi_name_replace1 = digi_name.replace('<td width="21%"> <img src="http://digidb.io/images/dot/dot629.png" style="vertical-align:middle;"> <a href="http://digidb.io/digimon-search/?request=1" style="font-weight: bold;">','')
    digi_name_replace2 = digi_name_replace1.replace('</a></img>','')
    digi_name = digi_name_replace2.strip()
    return(digi_name)
digi_name = get_digi_name()

def get_digi_stage():
    digi_stage = (contents[2])
    digi_stage_replace1 = digi_stage.replace('<td width="9%"><center>','')
    digi_stage_replace2 = digi_stage_replace1.replace('</center>','')
    digi_stage = digi_stage_replace2.strip()
    return(digi_stage)
digi_stage = get_digi_stage()

def get_digi_type():
    digi_type = (contents[3])
    digi_type_replace1 = digi_type.replace('<td width="7%"><center>','')
    digi_type_replace2 = digi_type_replace1.replace('</center>','')
    digi_type = digi_type_replace2.strip()
    return(digi_type)
digi_type = get_digi_type()

def get_digi_attribute():
    digi_attribute = (contents[4])
    digi_attribute_replace1 = digi_attribute.replace('<td width="7%"><center>','')
    digi_attribute_replace2 = digi_attribute_replace1.replace('</center>','')
    digi_attribute = digi_attribute_replace2.strip()
    return(digi_attribute)
digi_attribute = get_digi_attribute()

def get_digi_memory():
    digi_memory = (contents[5])
    digi_memory_replace1 = digi_memory.replace('<td width="7%"><center>','')
    digi_memory_replace2 = digi_memory_replace1.replace('</center>','')
    digi_memory = digi_memory_replace2.strip()
    return(digi_memory)
digi_memory = get_digi_memory()

def get_digi_equip_slots():
    digi_equip_slots = (contents[6])
    digi_equip_slots_replace1 = digi_equip_slots.replace('<td width="8%"><center>','')
    digi_equip_slots_replace2 = digi_equip_slots_replace1.replace('</center>','')
    digi_equip_slots = digi_equip_slots_replace2.strip()
    return(digi_equip_slots)
digi_equip_slots = get_digi_equip_slots()

def get_digi_hp():
    digi_hp = (contents[7])
    digi_hp_replace1 = digi_hp.replace('<td><center>','')
    digi_hp_replace2 = digi_hp_replace1.replace('</center>','')
    digi_hp = digi_hp_replace2.strip()
    return(digi_hp)
digi_hp = get_digi_hp()

def get_digi_sp():
    digi_sp = (contents[8])
    digi_sp_replace1 = digi_sp.replace('<td><center>','')
    digi_sp_replace2 = digi_sp_replace1.replace('</center>','')
    digi_sp = digi_sp_replace2.strip()
    return(digi_sp)
digi_sp = get_digi_sp()

def get_digi_atk():
    digi_atk = (contents[9])
    digi_atk_replace1 = digi_atk.replace('<td><center>','')
    digi_atk_replace2 = digi_atk_replace1.replace('</center>','')
    digi_atk = digi_atk_replace2.strip()
    return(digi_atk)
digi_atk = get_digi_atk()

def get_digi_def():
    digi_def = (contents[10])
    digi_def_replace1 = digi_def.replace('<td><center>','')
    digi_def_replace2 = digi_def_replace1.replace('</center>','')
    digi_def = digi_def_replace2.strip()
    return(digi_def)
digi_def = get_digi_def()

def get_digi_int():
    digi_int = (contents[11])
    digi_int_replace1 = digi_int.replace('<td><center>','')
    digi_int_replace2 = digi_int_replace1.replace('</center>','')
    digi_int = digi_int_replace2.strip()
    return(digi_int)
digi_int = get_digi_int()

def get_digi_spd():
    digi_spd = (contents[12])
    digi_spd_replace1 = digi_spd.replace('<td><center>','')
    digi_spd_replace2 = digi_spd_replace1.replace('</center>','')
    digi_spd = digi_spd_replace2.strip()
    return(digi_spd)
digi_spd = get_digi_spd()


### Test Prints
print(digi_num)
print(digi_sprite)
print(digi_name)
print(digi_stage)
print(digi_type)
print(digi_attribute)
print(digi_memory)
print(digi_equip_slots)
print(digi_hp)
print(digi_sp)
print(digi_atk)
print(digi_def)
print(digi_int)
print(digi_spd)


# list_txt.write(str(res))
list_txt.close()

