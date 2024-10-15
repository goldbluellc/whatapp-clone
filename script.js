document.addEventListener('DOMContentLoaded', function() {
    const contacts = document.querySelectorAll('.contact');
    const chatHeaderImg = document.getElementById('chatHeaderImg');
    const chatHeaderName = document.getElementById('chatHeaderName');
    const chatContent = document.getElementById('chatContent');
    const messageBox = document.getElementById('messageBox');
    const sendBtn = document.getElementById('sendBtn');
    const fileUploadBtn = document.getElementById('fileUploadBtn');
    const searchInput = document.getElementById('searchInput');

    // Example chat histories for each user (for simplicity)
    const chatHistories = {
        1: [
            { text: "Hi! How are you?", time: "10:45 AM", type: "received" },
            { text: "I’m good! How about you?", time: "10:46 AM", type: "sent" },
            { text: "What are you up to?", time: "10:47 AM", type: "received" },
            { text: "Just working on a project.", time: "10:48 AM", type: "sent" },
            { text: "Sounds interesting! Tell me more.", time: "10:50 AM", type: "received" },
            { text: "I’m creating a clone of WhatsApp Web using HTML, CSS, and JavaScript.", time: "10:51 AM", type: "sent" },
            { text: "Cool! How’s it going?", time: "10:52 AM", type: "received" },
            { text: "It’s coming along nicely.", time: "10:53 AM", type: "sent" },
            { text: "Can’t wait to see the final version!", time: "10:54 AM", type: "received" },
            { text: "Thanks!", time: "10:55 AM", type: "sent" }
        ],
        2: [
            { text: "Hey Sara! How’s life?", time: "9:00 AM", type: "sent" },
            { text: "Pretty good! Just working.", time: "9:01 AM", type: "received" },
            { text: "Any plans for the weekend?", time: "9:05 AM", type: "sent" },
            { text: "Thinking of hiking. You?", time: "9:06 AM", type: "received" },
            { text: "Might catch up on some reading.", time: "9:07 AM", type: "sent" },
            { text: "Sounds relaxing!", time: "9:08 AM", type: "received" },
            { text: "Absolutely.", time: "9:09 AM", type: "sent" },
            { text: "Let me know if you want to join.", time: "9:10 AM", type: "received" },
            { text: "Sure, will do.", time: "9:11 AM", type: "sent" },
            { text: "Great!", time: "9:12 AM", type: "received" }
        ],
        3: [
            { text: "Hi Mark, are you available for a quick chat?", time: "11:00 AM", type: "sent" },
            { text: "Sure, what’s up?", time: "11:02 AM", type: "received" },
            { text: "Need your feedback on the latest project.", time: "11:05 AM", type: "sent" },
            { text: "I’d be happy to help.", time: "11:06 AM", type: "received" },
            { text: "Can we meet tomorrow?", time: "11:07 AM", type: "sent" },
            { text: "Yes, let’s schedule for 10 AM.", time: "11:08 AM", type: "received" },
            { text: "Perfect, see you then.", time: "11:09 AM", type: "sent" },
            { text: "Looking forward to it.", time: "11:10 AM", type: "received" },
            { text: "Thanks, Mark.", time: "11:11 AM", type: "sent" },
            { text: "Anytime!", time: "11:12 AM", type: "received" }
        ],
        4: [
            { text: "Hey there!", time: "2:00 PM", type: "sent" },
            { text: "Hi! What’s up?", time: "2:01 PM", type: "received" },
            { text: "Just wanted to check in.", time: "2:02 PM", type: "sent" },
            { text: "All good here.", time: "2:03 PM", type: "received" },
            { text: "Great to hear!", time: "2:04 PM", type: "sent" },
            { text: "How about you?", time: "2:05 PM", type: "received" },
            { text: "Doing well, thanks.", time: "2:06 PM", type: "sent" },
            { text: "Awesome!", time: "2:07 PM", type: "received" },
            { text: "Catch up later?", time: "2:08 PM", type: "sent" },
            { text: "Sure thing.", time: "2:09 PM", type: "received" }
        ],
        5: [
            { text: "Hello!", time: "4:00 PM", type: "sent" },
            { text: "Hi there!", time: "4:01 PM", type: "received" },
            { text: "Are you attending the meeting tomorrow?", time: "4:02 PM", type: "sent" },
            { text: "Yes, I'll be there.", time: "4:03 PM", type: "received" },
            { text: "Great!", time: "4:04 PM", type: "sent" },
            { text: "See you then.", time: "4:05 PM", type: "received" },
            { text: "Looking forward to it.", time: "4:06 PM", type: "sent" },
            { text: "Me too.", time: "4:07 PM", type: "received" },
            { text: "Have a good evening.", time: "4:08 PM", type: "sent" },
            { text: "You too!", time: "4:09 PM", type: "received" }
        ],
        6: [
            { text: "Yo!", time: "6:00 PM", type: "sent" },
            { text: "Hey!", time: "6:01 PM", type: "received" },
            { text: "What's new?", time: "6:02 PM", type: "sent" },
            { text: "Not much, you?", time: "6:03 PM", type: "received" },
            { text: "Same here.", time: "6:04 PM", type: "sent" },
            { text: "Wanna grab a drink?", time: "6:05 PM", type: "received" },
            { text: "Sure, sounds good.", time: "6:06 PM", type: "sent" },
            { text: "Great!", time: "6:07 PM", type: "received" },
            { text: "See you at 8.", time: "6:08 PM", type: "sent" },
            { text: "See you!", time: "6:09 PM", type: "received" }
        ],
        7: [
            { text: "Good morning!", time: "8:00 AM", type: "sent" },
            { text: "Morning!", time: "8:01 AM", type: "received" },
            { text: "Ready for the presentation?", time: "8:02 AM", type: "sent" },
            { text: "Yes, all set.", time: "8:03 AM", type: "received" },
            { text: "Awesome!", time: "8:04 AM", type: "sent" },
            { text: "Let’s do this.", time: "8:05 AM", type: "received" },
            { text: "Absolutely.", time: "8:06 AM", type: "sent" },
            { text: "Good luck!", time: "8:07 AM", type: "received" },
            { text: "Thanks!", time: "8:08 AM", type: "sent" },
            { text: "You too!", time: "8:09 AM", type: "received" }
        ],
        8: [
            { text: "Hey Mumu!", time: "7:00 PM", type: "sent" },
            { text: "Hey!", time: "7:01 PM", type: "received" },
            { text: "How’s everything?", time: "7:02 PM", type: "sent" },
            { text: "All good. You?", time: "7:03 PM", type: "received" },
            { text: "Busy as always.", time: "7:04 PM", type: "sent" },
            { text: "Same here.", time: "7:05 PM", type: "received" },
            { text: "Wanna hang out this weekend?", time: "7:06 PM", type: "sent" },
            { text: "Sure, let’s plan something.", time: "7:07 PM", type: "received" },
            { text: "Awesome!", time: "7:08 PM", type: "sent" },
            { text: "Looking forward to it.", time: "7:09 PM", type: "received" }
        ]
    };

    // Function to load chat history for a specific user
    function loadChatHistory(userId) {
        const history = chatHistories[userId] || [];
        chatContent.innerHTML = '';
        history.forEach(msg => {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message', msg.type);
            messageDiv.innerHTML = `
                <p>${msg.text}</p>
                <span class="time">${msg.time}</span>
            `;
            chatContent.appendChild(messageDiv);
        });
        chatContent.scrollTop = chatContent.scrollHeight;
    }

    // Initialize with first user's chat history
    loadChatHistory(1);

    // Switch Chat on Contact Click
    contacts.forEach(contact => {
        contact.addEventListener('click', () => {
            // Remove active class from all contacts
            contacts.forEach(c => c.classList.remove('active'));
            // Add active class to clicked contact
            contact.classList.add('active');

            const user = contact.dataset.user;
            const userName = contact.querySelector('.contact-info h4').textContent;
            const userImg = contact.querySelector('img').src;

            // Update chat header
            chatHeaderImg.src = userImg;
            chatHeaderName.textContent = userName;

            // Load chat history for the selected user
            loadChatHistory(user);
        });
    });

    // Send Message Functionality
    sendBtn.addEventListener('click', function() {
        const messageText = messageBox.value.trim();
        if (messageText !== "") {
            const currentTime = new Date();
            const hours = currentTime.getHours() % 12 || 12;
            const minutes = currentTime.getMinutes().toString().padStart(2, '0');
            const ampm = currentTime.getHours() >= 12 ? 'PM' : 'AM';
            const formattedTime = `${hours}:${minutes} ${ampm}`;

            const messageHtml = `
                <div class="message sent">
                    <p>${messageText}</p>
                    <span class="time">${formattedTime}</span>
                </div>
            `;
            chatContent.innerHTML += messageHtml;
            messageBox.value = "";
            chatContent.scrollTop = chatContent.scrollHeight;
        }
    });

    // Allow sending message on Enter key
    messageBox.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    // File Upload Button Functionality
    fileUploadBtn.addEventListener('click', function() {
        // Create a hidden file input
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '*/*'; // Accept all file types

        // Trigger the file dialog
        fileInput.click();

        // Handle file selection
        fileInput.addEventListener('change', function() {
            if (fileInput.files.length > 0) {
                const fileName = fileInput.files[0].name;
                const currentTime = new Date();
                const hours = currentTime.getHours() % 12 || 12;
                const minutes = currentTime.getMinutes().toString().padStart(2, '0');
                const ampm = currentTime.getHours() >= 12 ? 'PM' : 'AM';
                const formattedTime = `${hours}:${minutes} ${ampm}`;

                const messageHtml = `
                    <div class="message sent">
                        <p>📎 ${fileName}</p>
                        <span class="time">${formattedTime}</span>
                    </div>
                `;
                chatContent.innerHTML += messageHtml;
                chatContent.scrollTop = chatContent.scrollHeight;
            }
        });
    });

    // Search Functionality
    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        const contacts = document.querySelectorAll('.contact');

        contacts.forEach(contact => {
            const name = contact.querySelector('.contact-info h4').textContent.toLowerCase();
            if (name.includes(filter)) {
                contact.style.display = '';
            } else {
                contact.style.display = 'none';
            }
        });
    });
});