import React, { useState } from 'react';
import "../style/Input.css";

const Input = (props) => {


    const [codeInput, inputUpdate] = useState(
        {
            html: '',
            tab: '',
            des: '',
        }
    );
    function htmlChanged(event) {
        inputUpdate({
            ...codeInput,
            html: event.target.value,
        })
        props.onSaveInputCode(codeInput);
    };
    function tabTriggerChanged(event) {
        inputUpdate({
            ...codeInput,
            tab: event.target.value,
        })
        props.onSaveInputCode(codeInput);
    };
    function descriptionChanged(event) {
        inputUpdate({
            ...codeInput,
            des: event.target.value,
        })
        props.onSaveInputCode(codeInput);
    };

    return (
        <>
            <div className="input-main">
                <div className="input-main-top">
                    <input
                        type="text"
                        className="input-text"
                        name="description"
                        placeholder="Description"
                        onInput={descriptionChanged}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                    />
                    <input
                        type="text"
                        className="input-text"
                        name="tabTrigger"
                        placeholder="Tab Trigger"
                        onInput={tabTriggerChanged}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                    />
                </div>
                <div className="input-main-bottom">
                    <textarea
                        className="input-text-area"
                        name="snippet"
                        placeholder="Your Snippet"
                        onChange={htmlChanged}
                        autoComplete="off"
                        autoCorrect="off"
                        autoCapitalize="off"
                        spellCheck="false"
                        wrap="off"
                    />
                </div>
            </div>
        </>
    );
};

export default Input;