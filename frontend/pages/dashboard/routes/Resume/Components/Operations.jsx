
import React from 'react'
import {
  Tipso,
  Button,
  IconButton,
  ClassicButton,
  AnimationComponent
} from 'light-ui'
import cx from 'classnames'
import locales from 'LOCALES'
import styles from '../styles/resume.css'
import Icon from 'COMPONENTS/Icon'

const resumeTexts = locales('resume')

class Wrapper extends React.Component {
  render() {
    const {
      status,
      posting,
      saveResume,
      handlePreview,
      downloadResume,
      saveDisabled,
      downloadDisabled,
      onTransitionEnd,
      handleShareModalStatus,
      handleIntroModalStatus,
      handleTemplateModalStatus
    } = this.props

    return (
      <div
        className={cx(
          styles.resume_operations,
          styles[`resume_operations-${status}`]
        )}
        onTransitionEnd={onTransitionEnd}
      >
        <div className={styles.operations_wrapper}>
          <IconButton
            color="gray"
            icon="question"
            className={styles.icon_button}
            onClick={() => handleIntroModalStatus(true)}
          />
          <Tipso
            trigger="hover"
            theme="dark"
            className={styles.icon_button_tipso}
            tipsoContent={(<span>{resumeTexts.messages.templateTip}</span>)}
          >
            <IconButton
              color="gray"
              icon="file-text"
              className={styles.icon_button}
              onClick={() => handleTemplateModalStatus(true)}
            />
          </Tipso>
          <Tipso
            trigger="hover"
            theme="dark"
            className={styles.icon_button_tipso}
            tipsoContent={(<span>{resumeTexts.messages.downloadTip}</span>)}
          >
            <IconButton
              color="gray"
              icon="download"
              className={styles.icon_button}
              onClick={downloadResume}
              disabled={downloadDisabled}
            />
          </Tipso>
          <IconButton
            color="gray"
            icon="share-alt"
            className={styles.icon_button}
            onClick={() => handleShareModalStatus(true)}
          />
          &nbsp;&nbsp;
          <ClassicButton
            theme="dark"
            className={styles.operationButtonWrapper}
          >
            <Button
              value={resumeTexts.buttons.preview}
              color="dark"
              onClick={handlePreview}
              className={styles.operation}
              leftIcon={(
                <Icon icon="file-text-o" />
              )}
            />
          </ClassicButton>
          &nbsp;&nbsp;&nbsp;
          <ClassicButton
            theme="green"
            className={styles.operationButtonWrapper}
          >
            <Button
              disabled={saveDisabled}
              theme="none"
              value={posting
                ? resumeTexts.buttons.saving
                : resumeTexts.buttons.save}
              className={styles.operation}
              onClick={() => saveResume('message=1')}
              leftIcon={(
                <Icon icon="save" />
              )}
            />
          </ClassicButton>
        </div>
      </div>
    )
  }
}

const ResumeOperations = props => (
  <AnimationComponent>
    <Wrapper {...props} />
  </AnimationComponent>
)

export default ResumeOperations
