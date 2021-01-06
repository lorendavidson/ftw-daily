/* eslint-disable no-console */
import EditListingAttachmentsForm from './EditListingAttachmentsForm';

export const Empty = {
  component: EditListingAttachmentsForm,
  props: {
    initialValues: { country: 'US', files: [] },
    stripeConnected: false,
    onFileUpload: values => {
      console.log(`onFileUpload with id (${values.id}) and file name (${values.file.name})`);
    },
    onSubmit: values => {
      console.log('Submit EditListingAttachmentsForm with (unformatted) values:', values);
    },
    saveActionMsg: 'Save attachments',
    updated: false,
    ready: false,
    updateInProgress: false,
    disabled: false,
    onRemoveFile: fileId => {
      console.log('remove file:', fileId);
    },
  },
  group: 'forms',
};
