import React, { Fragment } from 'react'
import { DatePicker, Checkbox, Upload, Radio, Form, Input, TimePicker, Select, Button } from "antd";


const FormItem = Form.Item;
const { Option } = Select;
const items = ['Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|',
    'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
    'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'];

const RadioBtnsGroup = (props) => {

    return (

        <Fragment>
            <Radio.Group
                options={props.options}
                onChange={(e) => props.onChange(e.target.value)}
                value={props.value}
            // optionType="button"
            />
        </Fragment>
    )

}
const CheckBoxWithLabel = (props) => {
    return (
        <Fragment>
            <Checkbox checked={props.value} onChange={(e) => props.onChange(e.target.checked)}>{props.text}</Checkbox>
        </Fragment>
    )

}

const CreateAntFields =
    (AntComponent) =>
        ({
            field,
            form,
            hasFeedback,
            label,
            selectOptions,
            submitCount,
            type,
            required,
            radioOptions,
            dateFormat,
            disable,
            ...props
        }) => {
            const touched = form.touched[field.name];
            const submitted = submitCount > 0;
            const hasError = form.errors[field.name];
            const submittedError = hasError && submitted;
            const touchedError = hasError && touched;
            const onInputChange = ({ target: { value } }) => {

                form.setFieldValue(field.name, value);
            }
            const onChange = (value, datestring) => {

                form.setFieldValue(field.name, value);
            }
            // const fileName = ( value) => {

            //   if(form.values.projectId){
            //     return
            //   }
            //   form.setFieldValue('projectId', value);
            // }
            const onBlur = () => form.setFieldTouched(field.name, true);


            return (
                <div className="field-container">
                    <FormItem

                        label={label}
                        labelCol={{ span: 24 }}
                        required={required}
                        hasFeedback={
                            (hasFeedback && submitted) || (hasFeedback && touched)
                                ? true
                                : false
                        }
                        help={submittedError || touchedError ? hasError : false}
                        validateStatus={submittedError || touchedError ? "error" : "success"}
                    >

                        <AntComponent
                            {...field}
                            {...props}
                            formobj={form}
                            type={type}
                            disabled={disable}
                            // showSearch
                            // optionFilterProp="children"
                            onBlur={onBlur}
                            placeholder={props.placeholder}
                            onChange={type ? onInputChange : onChange}
                            value={field?.value || undefined}
                        >
                            {selectOptions &&
                                selectOptions?.map(({ name, value }) => (
                                    <Option key={name} value={value}>
                                        {name}
                                    </Option>
                                ))}

                        </AntComponent>
                        {/* {form.errors[field.name]} */}
                    </FormItem>
                </div>
            );
        };

export default CreateAntFields;


export const AntSelect = CreateAntFields(Select);
export const AntDatePicker = CreateAntFields(DatePicker);
export const AntInput = CreateAntFields(Input);
export const AntTextArea = CreateAntFields(Input.TextArea);
export const AntTimePicker = TimePicker;
// export const AntUpload = CreateAntFields(UploadBtn);
export const RadioGroup = CreateAntFields(RadioBtnsGroup);
export const AntCheckBox = CreateAntFields(CheckBoxWithLabel);

