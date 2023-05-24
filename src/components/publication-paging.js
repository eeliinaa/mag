import PropTypes from 'prop-types';

import {
    Button,
    MobileStepper
} from '@mui/material';
import ArrowLeftIcon from '@heroicons/react/24/solid/ArrowLeftIcon';
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon';

export const PublicationPaging = ({ stepsLength, onStepChange, activeStep }) => {
    // const [activeStep, setActiveStep] = useState(0)

    const handleLessonNext = () => {
        // setActiveStep((prev) => {
        //     return prev + 1
        // })
        onStepChange(activeStep + 1)
    }
    const handleLessonBack = () => {
        // setActiveStep((prev) => {
        //     return prev - 1
        // })
        onStepChange(activeStep - 1)
    }

    return (
        <MobileStepper
            variant="text"
            steps={stepsLength}
            // steps={steps[activeStep].lessons.length}
            position="static"
            activeStep={activeStep}
            nextButton={
                <Button
                    size="small"
                    onClick={handleLessonNext}
                    disabled={activeStep === (stepsLength) - 1}
                // disabled={activeStepLesson === (steps[activeStep].lessons.length) - 1}
                >
                    Next
                    <ArrowRightIcon />
                </Button>
            }
            backButton={
                <Button size="small"
                    onClick={handleLessonBack}
                    disabled={activeStep === 0}
                >
                    <ArrowLeftIcon />
                    Back
                </Button>
            }
        />
    )
}

PublicationPaging.propTypes = {}