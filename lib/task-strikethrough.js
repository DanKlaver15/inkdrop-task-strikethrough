'use babel';

import TaskStrikethroughMessageDialog from './task-strikethrough-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(TaskStrikethroughMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'TaskStrikethroughMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'TaskStrikethroughMessageDialog'
    )
    inkdrop.components.deleteClass(TaskStrikethroughMessageDialog);
  }

};
