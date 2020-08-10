/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import './assets/faq.css'
import FAQ from './components/FAQ';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox() {

  const [faqs, setfaqs] = useState([
    {
      question: 'How to upload the image?',
      answer: 'Drag and drop the image into the placeholder',
      open: true
    },
    {
      question: 'Who could change the image?',
      answer: 'You.',
      open: false
    },
    {
      question: 'Does there any FAQ page?',
      answer: 'Sure',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div>
    <Autocomplete
      id="combo-box-demo"
      options={faqs}
      getOptionLabel={(option) => option.question}
      style={{ width: 300, marginLeft:'53%', marginBottom:'5%' }}
      renderInput={(params) => <TextField {...params} label="ask me" variant="outlined" />}
    />

    <div className="App">
       <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
    </div>
  );
}
