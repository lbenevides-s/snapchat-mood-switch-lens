// @input Component.Image[] targetImages

// Variáveis de Estado
var indiceCorAtual = 0; // Começa na primeira cor (Item 0 da lista)
var valorSliderSalvo = 1.0; // Começa com força total

// --- FUNÇÃO 1: RECEBE O VALOR DO SLIDER ---
script.mudarLuz = function(valor) {
    // Guarda o valor para usar quando trocar de cor
    valorSliderSalvo = valor;
    atualizarVisual();
};

// --- FUNÇÃO 2: DETECTA O TOQUE NA TELA (TAP) ---
function aoTocar() {
    // Avança para a próxima cor da lista
    indiceCorAtual = indiceCorAtual + 1;
    
    // Se chegou no fim da lista, volta para o zero (Loop)
    if (indiceCorAtual >= script.targetImages.length) {
        indiceCorAtual = 0;
    }
    
    print("👆 Trocou para a luz número: " + indiceCorAtual);
    atualizarVisual();
}

// --- FUNÇÃO 3: APLICA AS MUDANÇAS ---
function atualizarVisual() {
    // Percorre todas as luzes configuradas
    for (var i = 0; i < script.targetImages.length; i++) {
        var imagem = script.targetImages[i];
        
        if (imagem && imagem.mainPass) {
            var corOriginal = imagem.mainPass.baseColor;
            
            // LÓGICA MÁGICA:
            // Se 'i' for a luz escolhida, usa o valor do slider.
            // Se 'i' NÃO for a escolhida, força 0 (apaga ela).
            var intensidadeFinal = (i === indiceCorAtual) ? valorSliderSalvo : 0.0;
            
            imagem.mainPass.baseColor = new vec4(corOriginal.r, corOriginal.g, corOriginal.b, intensidadeFinal);
        }
    }
}

// Conectar eventos
var tapEvent = script.createEvent("TapEvent");
tapEvent.bind(aoTocar);

// Conectar API antiga (garantia)
if (script.api) {
    script.api.mudarLuz = script.mudarLuz;
}

// Inicializar: Começa com a primeira luz ligada no máximo
script.mudarLuz(1.0);