import React, { useState } from 'react';


type FieldType = 'text' | 'email' | 'number' | 'textarea';

interface Field {
  id: number;
  type: FieldType;
  placeholder: string;
  name: string;
}

const FomrBuilder: React.FC = () => {
  const [fields, setFields] = useState<Field[]>([]);
  const [fieldType, setFieldType] = useState<FieldType | ''>('');
  const [placeholder, setPlaceholder] = useState('');
  const [fieldName, setFieldName] = useState('');
  const [formData, setFormData] = useState<{ [key: string]: string }[]>([]);
  const [error, setError] = useState<string>(''); // State for error messages
  console.log(formData)

  const addField = () => {
    if (!fieldType || !placeholder || !fieldName) {
      setError('All fields must be filled out.');
      return;
    }

    const newField: Field = {
      id: Date.now(),
      type: fieldType as FieldType,
      placeholder,
      name: fieldName,
    };

    setFields([...fields, newField]);
    setFieldType('');
    setPlaceholder('');
    setFieldName('');
    setError('');
  };

  const removeField = (id: number) => {
    setFields(fields.filter(field => field.id !== id));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: { [key: string]: string } = {};

    for (const field of fields) {
      const inputValue = (document.getElementById(`field-${field.id}`) as HTMLInputElement)?.value || '';
      data[field.name] = inputValue;
    }


    setFormData(prevData => [...prevData, data]); 


    fields.forEach(field => {
      const inputElement = document.getElementById(`field-${field.id}`) as HTMLInputElement;
      if (inputElement) {
        inputElement.value = ''; 
      }
    });
  };

  return (
    <div className="max-w-[800px] mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-4">Dynamic Form Builder</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <div className="text-red-500">{error}</div>}
        
        <div className="flex items-center space-x-2">
          <select
            value={fieldType}
            onChange={(e) => setFieldType(e.target.value as FieldType)}
            className="p-2 border rounded"
          >
            <option value="">--Choose Field Type--</option>
            <option value="text">Text Input</option>
            <option value="email">Email Input</option>
            <option value="number">Number Input</option>
            <option value="textarea">Textarea</option>
          </select>

          <input
            type="text"
            placeholder="Field Name"
            value={fieldName}
            onChange={(e) => setFieldName(e.target.value)}
            className="p-2 border rounded"
          />

          <input
            type="text"
            placeholder="Placeholder"
            value={placeholder}
            onChange={(e) => setPlaceholder(e.target.value)}
            className="p-2 border rounded"
          />
          
          <button 
            type="button" 
            onClick={addField} 
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add Field
          </button>
        </div>

        <div className="form-preview">
          <h2 className="text-xl font-semibold mt-4">Form Preview</h2>
          {fields.map((field) => (
            <div key={field.id} className="flex items-center space-x-2 mt-2">
              <label className="font-medium">{field.name}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={`field-${field.id}`}
                  placeholder={field.placeholder}
                  className="flex-1 p-2 border rounded"
                />
              ) : (
                <input
                  id={`field-${field.id}`}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="flex-1 p-2 border rounded"
                />
              )}
              <button 
                type="button" 
                onClick={() => removeField(field.id)} 
                className="bg-red-500 text-white p-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <button 
          type="submit" 
          className="bg-green-500 text-white p-2 rounded mt-4"
        >
          Submit Form
        </button>
      </form>

      {/* <div className="mt-4">
        <h2 className="text-lg font-semibold">Submitted Data</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default FomrBuilder;

