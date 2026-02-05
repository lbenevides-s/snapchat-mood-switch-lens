# Mood Switch Lente (Snapchat)

Uma lente interativa para Snapchat desenvolvida no **Lens Studio**. O projeto permite ao usuário alternar entre "moods" de iluminação (Vermelho Neon e Roxo Cyberpunk) com controle total de intensidade.

## Funcionalidades

* **Controle de Intensidade:** Slider customizado (estilo barra de luz) para ajustar a opacidade da cor.
* **Troca de Cores (Tap):** Toque na tela para alternar entre os filtros **Red** e **Purple**.
* **UI Inteligente:** O slider desaparece automaticamente durante a captura da foto/vídeo (`HideOnCapture`).
* **Design Responsivo:** Ícones e barras ajustados para diferentes tamanhos de tela.

## Tecnologias & Técnicas

* **Lens Studio:** Motor de Realidade Aumentada.
* **JavaScript (ES6):**
    * Manipulação de **Scene Objects** e **Materials**.
    * Criação de **Custom Events** para comunicação entre componentes.
    * Lógica de **Event Callbacks** para conectar o Slider ao Script principal.
* **Versionamento:** Git & GitHub.

## Estrutura do Projeto

* `Controlador`: Objeto principal que gerencia a lógica de troca de luzes.
* `Slider`: Interface de usuário (UI) customizada com setas e transparência estilo vidro.
* `Scripts`:
    * `LightController.js`: Gerencia a lógica de cores e intensidade.
    * `HideOnCapture.js`: Detecta eventos de gravação para limpar a interface.

## Como testar

1.  Baixe o **Lens Studio** (versão mais recente).
2.  Clone este repositório:
    ```bash
    git clone [https://github.com/SEU-USUARIO/NOME-DO-REPO.git](https://github.com/lbenevides-s/snapchat-mood-switch-lens.git)
    ```
3.  Abra o arquivo `.lsproj` dentro do Lens Studio.

---
Desenvolvido por **Lucas Benevides** 