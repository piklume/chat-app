import { removeHtmlTags } from '../utilities.js'

const MyMessage = ({ message }) => {
    // console.log('MyMessage',message);
    if(message?.attachments?.length > 0) {
        return (
            <img 
                src={message.attachments[0].file}
                alt='message-attachments'
                className='message-image'
                style={{ float: 'right' }}
            />
        )
    }

    return (
        <div className='message' style={{ float: 'right', margineRight: '18px', color: 'white', backgroundColor: '#3B2A50' }} >
            {removeHtmlTags(message.text)}
        </div>
    );
}

export default MyMessage;