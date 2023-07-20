import './Rating.css'
import { Box, Text, Divider, Icon, HorizontalStack } from "@shopify/polaris";

export default function Rating() {
    return (
        <Box padding="5" background="bg-success" borderRadius="1">
            <HorizontalStack>
                <Text variant="bodyLg" fontWeight="semibold" as="p">
                    <ChatIcon /> Would you mind letting us know what you think about Scrollio?
                </Text>
                <Stars />
            </HorizontalStack>
            <Divider borderWidth="5" borderColor="transparent" />
            <Text variant='bodySm'>
                This business literally survives on reviews, and each <strong>positive review</strong> helps us maintain focus on keeping the app <strong>stable</strong> and <strong>affordable</strong>.
            </Text>

        </Box>
    );
}



function ChatIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2} fill='none' stroke="#1f2124" height={18} style={{ verticalAlign: 'bottom' }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>

}

function Stars() {

    return <>
        <Box paddingInlineStart="3">
            <HorizontalStack gap="1">
                <Star index="1" />
                <Star index="2" />
                <Star index="3" />
                <Star index="4" />
                <Star index="5" />
            </HorizontalStack>
        </Box>
    </>
}


function Star({ index }) {
    const handler = (e) => {
        const index = e.target.dataset.index
        if (e.type == "mouseenter") {
            for (let i = 1; i < index; i++) {
                document.querySelector(`.star[data-index="${i}"]`).classList.add('active')
            }
        } else if (e.type == "mouseleave") {
            for (let i = 1; i < index; i++) {
                document.querySelector(`.star[data-index="${i}"]`).classList.remove('active')
            }
        } else if (e.type == "click") {
            for (let i = 1; i <= index; i++) {
                // document.querySelector(`.star[data-index="${i}"]`).classList.add('active')
            }
        }
    }

    return <>
        <svg onMouseEnter={handler} onClick={handler} onMouseLeave={handler} data-index={index} className='star' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" width={20} height={20}>
            <path data-index={index} strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
    </>
}