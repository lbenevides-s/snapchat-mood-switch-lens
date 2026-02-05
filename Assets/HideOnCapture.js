// @input SceneObject objetoParaEsconder

// Verifica se o objeto foi arrastado para o script
if (!script.objetoParaEsconder) {
    print("⚠️ AVISO: Arraste o Slider para o script HideOnCapture!");
}

// 1. Quando começa a tirar FOTO ou gravar VÍDEO
// O evento 'SnapImageCaptureEvent' funciona para o início da foto.
script.createEvent("SnapImageCaptureEvent").bind(function() {
    if (script.objetoParaEsconder) {
        script.objetoParaEsconder.enabled = false;
    }
});

script.createEvent("SnapRecordStartEvent").bind(function() {
    if (script.objetoParaEsconder) {
        script.objetoParaEsconder.enabled = false;
    }
});

// 2. Quando TERMINA a captura (Aqui estava o erro!)
// Não existe 'SnapImageCaptureEndEvent'. O jeito certo é usar 'LateUpdate' 
// ou apenas reativar no próximo frame, mas para garantir, usamos o evento de gravação.

script.createEvent("SnapRecordStopEvent").bind(function() {
    if (script.objetoParaEsconder) {
        script.objetoParaEsconder.enabled = true;
    }
});

// TRUQUE PARA FOTO:
// Como foto é instantânea, não tem um evento de "fim" confiável.
// O segredo é agendar para ligar de volta depois de um tempo curto.
script.createEvent("SnapImageCaptureEvent").bind(function() {
    // Espera 0.5 segundos e liga de volta
    var eventoAtrasado = script.createEvent("DelayedCallbackEvent");
    eventoAtrasado.bind(function() {
        if (script.objetoParaEsconder) {
            script.objetoParaEsconder.enabled = true;
        }
    });
    eventoAtrasado.reset(0.1); // 0.1 segundo depois
});