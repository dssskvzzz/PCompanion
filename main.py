import eel
import psutil
import os
eel.init('web')

@eel.expose
def get_cpu_percent():
    return psutil.cpu_percent()

@eel.expose
def get_memory_info():
    return psutil.virtual_memory()._asdict()

@eel.expose
def activate():
    os.system("slmgr /ato")

eel.start('land/index.html', size=(1080, 720))
