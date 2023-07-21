import { Modal, TextField, Text } from '@shopify/polaris';
import { useContext, useState } from 'react';
import modalContext from '../components/providers/Model'
import ratingContext from '../components/providers/Rating'

export default function CustomModal() {
    const [isOpen, setActive] = useContext(modalContext)
    const [ratings] = useContext(ratingContext)
    const [feedback, setFeedback] = useState("")
    const [errorText, setErrorText] = useState("")
    const [isLoading, setLoading] = useState(false)

    // const handleChange = useCallback(() => setActive(!active), [active]);
    const handleChange = () => setActive(!isOpen);
    const handleSetReview = (val) => {
        setErrorText("")
        setFeedback(val)
    }


    const handleSubmitReview = () => {
        if (feedback.trim() == "") {
            setErrorText("Feedback is required!")
        } else {
            if (ratings !== null) {
                setLoading(true)
                window.localStorage.setItem('feedback', ratings)
                setTimeout(() => {
                    setActive(false)
                    setLoading(false)
                    highlighter(ratings)
                }, 1000)
            }
        }
    }

    return (
        <>
            <Modal
                open={isOpen}
                onClose={handleChange}
                title="Please provide us feedback! 😢"
                primaryAction={{
                    content: 'Give Feedback',
                    onAction: handleSubmitReview,
                    loading: isLoading
                }}
            >
                <Modal.Section>
                    <TextField
                        label="Feedback"
                        error={errorText}
                        value={feedback}
                        onChange={handleSetReview}
                        multiline={4}
                        autoComplete="off"
                    />
                </Modal.Section>
            </Modal>
        </>
    );
}

// Function to high light stars
function highlighter(count) {
    // Targeting all stars
    const stars = document.querySelectorAll('.star')

    // Removing existing stars
    for (const star of stars)
        star.classList.remove('active')

    // Higlighting stars
    for (let i = 0; i < count; i++) {
        stars[i].classList.add('active')
    }
}