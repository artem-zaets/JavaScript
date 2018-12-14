const Reset = new ResetServise();

const messageM = new Message();
messageM.init();

const EmailReset = document.getElementById('emailM');
const formM = document.getElementById('modalForm');

function submitHandler(e) {
    e.preventDefault();
    
    Reset.reset(EmailReset.value)
        .then((res) => {
            if (!res.error) {
                 messageM.show({text: res.message, error: res.error});
                 $("#modalW").modal("toggle");
            } else {
                messageM.show({text: res.message, error: res.error});
            }
        });
}

formM.addEventListener("submit", submitHandler);
