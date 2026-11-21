export type Message={id:string;category:string;text:string};
export const categories: string[] = ["Phishing \u0026 Suspicious Emails","Password Security","Multi-Factor Authentication (MFA)","Clean Desk \u0026 Screen Security","Data Protection \u0026 Privacy","Remote Work \u0026 Public Wi-Fi","USB Devices \u0026 Unknown Hardware","Software Updates \u0026 Security Patches","Incident Reporting","Social Engineering \u0026 Impersonation"];
export const messages: Message[] = [
    {
        "id":  "phishing-001",
        "category":  "Phishing \u0026 Suspicious Emails",
        "text":  "Urgent emails are designed to make you act before you think. Take a moment to verify."
    },
    {
        "id":  "phishing-002",
        "category":  "Phishing \u0026 Suspicious Emails",
        "text":  "A familiar name does not guarantee a legitimate email. Check the sender\u0027s address."
    },
    {
        "id":  "phishing-003",
        "category":  "Phishing \u0026 Suspicious Emails",
        "text":  "Unexpected links can lead to fake login pages. Verify before you click."
    },
    {
        "id":  "phishing-004",
        "category":  "Phishing \u0026 Suspicious Emails",
        "text":  "If an email creates pressure or panic, pause and investigate."
    },
    {
        "id":  "phishing-005",
        "category":  "Phishing \u0026 Suspicious Emails",
        "text":  "Never trust an email simply because it looks professionally written."
    },
    {
        "id":  "phishing-006",
        "category":  "Phishing \u0026 Suspicious Emails",
        "text":  "Unexpected attachments can hide malicious software. Think before opening them."
    },
    {
        "id":  "phishing-007",
        "category":  "Phishing \u0026 Suspicious Emails",
        "text":  "Spelling mistakes are not the only sign of phishing. Be alert to unusual requests."
    },
    {
        "id":  "phishing-008",
        "category":  "Phishing \u0026 Suspicious Emails",
        "text":  "If something feels wrong, don\u0027t interact with the email. Report it."
    },
    {
        "id":  "phishing-009",
        "category":  "Phishing \u0026 Suspicious Emails",
        "text":  "Fake IT messages often ask you to act quickly. Verify through official channels."
    },
    {
        "id":  "phishing-010",
        "category":  "Phishing \u0026 Suspicious Emails",
        "text":  "One suspicious click can compromise more than just your account."
    },
    {
        "id":  "password-001",
        "category":  "Password Security",
        "text":  "Never reuse your work password across personal accounts."
    },
    {
        "id":  "password-002",
        "category":  "Password Security",
        "text":  "Strong passwords make unauthorized access harder."
    },
    {
        "id":  "password-003",
        "category":  "Password Security",
        "text":  "Your password is personal. Never share it with anyone."
    },
    {
        "id":  "password-004",
        "category":  "Password Security",
        "text":  "Avoid passwords based on names, birthdays, or predictable patterns."
    },
    {
        "id":  "password-005",
        "category":  "Password Security",
        "text":  "A compromised password can expose more than one account."
    },
    {
        "id":  "password-006",
        "category":  "Password Security",
        "text":  "Never send your password through email or chat."
    },
    {
        "id":  "password-007",
        "category":  "Password Security",
        "text":  "Use your company\u0027s approved password manager whenever available."
    },
    {
        "id":  "password-008",
        "category":  "Password Security",
        "text":  "Changing a character in an old password does not make it secure."
    },
    {
        "id":  "password-009",
        "category":  "Password Security",
        "text":  "Keep your login credentials away from public view."
    },
    {
        "id":  "password-010",
        "category":  "Password Security",
        "text":  "Protect your password as carefully as you protect your company devices."
    },
    {
        "id":  "mfa-001",
        "category":  "Multi-Factor Authentication (MFA)",
        "text":  "Never approve an MFA request you did not initiate."
    },
    {
        "id":  "mfa-002",
        "category":  "Multi-Factor Authentication (MFA)",
        "text":  "Unexpected authentication requests may indicate someone knows your password."
    },
    {
        "id":  "mfa-003",
        "category":  "Multi-Factor Authentication (MFA)",
        "text":  "Repeated MFA prompts are a warning sign. Report them immediately."
    },
    {
        "id":  "mfa-004",
        "category":  "Multi-Factor Authentication (MFA)",
        "text":  "MFA adds protection, but only when you use it carefully."
    },
    {
        "id":  "mfa-005",
        "category":  "Multi-Factor Authentication (MFA)",
        "text":  "A login approval is permission to access your account. Check before approving."
    },
    {
        "id":  "mfa-006",
        "category":  "Multi-Factor Authentication (MFA)",
        "text":  "Never share MFA codes with anyone."
    },
    {
        "id":  "mfa-007",
        "category":  "Multi-Factor Authentication (MFA)",
        "text":  "IT will never need you to approve an unknown login to troubleshoot your account."
    },
    {
        "id":  "mfa-008",
        "category":  "Multi-Factor Authentication (MFA)",
        "text":  "If a login request looks unfamiliar, deny it."
    },
    {
        "id":  "mfa-009",
        "category":  "Multi-Factor Authentication (MFA)",
        "text":  "An unexpected MFA notification should never be ignored."
    },
    {
        "id":  "mfa-010",
        "category":  "Multi-Factor Authentication (MFA)",
        "text":  "Your MFA approval is the final checkpoint. Make sure it is yours."
    },
    {
        "id":  "clean-desk-001",
        "category":  "Clean Desk \u0026 Screen Security",
        "text":  "Lock your screen every time you leave your workstation."
    },
    {
        "id":  "clean-desk-002",
        "category":  "Clean Desk \u0026 Screen Security",
        "text":  "An unattended computer is an open door to company information."
    },
    {
        "id":  "clean-desk-003",
        "category":  "Clean Desk \u0026 Screen Security",
        "text":  "Keep confidential documents away from public view."
    },
    {
        "id":  "clean-desk-004",
        "category":  "Clean Desk \u0026 Screen Security",
        "text":  "Never leave sensitive information on your desk overnight."
    },
    {
        "id":  "clean-desk-005",
        "category":  "Clean Desk \u0026 Screen Security",
        "text":  "Your screen can expose company data even when you are not there."
    },
    {
        "id":  "clean-desk-006",
        "category":  "Clean Desk \u0026 Screen Security",
        "text":  "Lock first. Walk away second."
    },
    {
        "id":  "clean-desk-007",
        "category":  "Clean Desk \u0026 Screen Security",
        "text":  "Dispose of sensitive documents using approved secure disposal methods."
    },
    {
        "id":  "clean-desk-008",
        "category":  "Clean Desk \u0026 Screen Security",
        "text":  "Keep access badges safe and never lend them to others."
    },
    {
        "id":  "clean-desk-009",
        "category":  "Clean Desk \u0026 Screen Security",
        "text":  "A clean desk is part of good security."
    },
    {
        "id":  "clean-desk-010",
        "category":  "Clean Desk \u0026 Screen Security",
        "text":  "Protect your workspace even when you are inside the office."
    },
    {
        "id":  "data-protection-001",
        "category":  "Data Protection \u0026 Privacy",
        "text":  "Share company information only with people who need access."
    },
    {
        "id":  "data-protection-002",
        "category":  "Data Protection \u0026 Privacy",
        "text":  "Always double-check recipients before sending an email."
    },
    {
        "id":  "data-protection-003",
        "category":  "Data Protection \u0026 Privacy",
        "text":  "A wrong recipient can turn a routine email into a data breach."
    },
    {
        "id":  "data-protection-004",
        "category":  "Data Protection \u0026 Privacy",
        "text":  "Never upload company data to unauthorized websites or tools."
    },
    {
        "id":  "data-protection-005",
        "category":  "Data Protection \u0026 Privacy",
        "text":  "Confidential information should never be shared through personal accounts."
    },
    {
        "id":  "data-protection-006",
        "category":  "Data Protection \u0026 Privacy",
        "text":  "Collect and use only the information necessary for your task."
    },
    {
        "id":  "data-protection-007",
        "category":  "Data Protection \u0026 Privacy",
        "text":  "Verify permissions before sharing files."
    },
    {
        "id":  "data-protection-008",
        "category":  "Data Protection \u0026 Privacy",
        "text":  "Screenshots can expose sensitive information. Check before sharing."
    },
    {
        "id":  "data-protection-009",
        "category":  "Data Protection \u0026 Privacy",
        "text":  "Customer data deserves the same care as your own personal information."
    },
    {
        "id":  "data-protection-010",
        "category":  "Data Protection \u0026 Privacy",
        "text":  "When in doubt about sharing data, stop and verify."
    },
    {
        "id":  "remote-work-001",
        "category":  "Remote Work \u0026 Public Wi-Fi",
        "text":  "Public Wi-Fi can expose your connection to security risks. Avoid sensitive work on unsecured networks."
    },
    {
        "id":  "remote-work-002",
        "category":  "Remote Work \u0026 Public Wi-Fi",
        "text":  "Never leave your work laptop unattended in public."
    },
    {
        "id":  "remote-work-003",
        "category":  "Remote Work \u0026 Public Wi-Fi",
        "text":  "Keep your work device close and secure when travelling."
    },
    {
        "id":  "remote-work-004",
        "category":  "Remote Work \u0026 Public Wi-Fi",
        "text":  "Use your company\u0027s approved VPN when required."
    },
    {
        "id":  "remote-work-005",
        "category":  "Remote Work \u0026 Public Wi-Fi",
        "text":  "Avoid discussing confidential information in public places."
    },
    {
        "id":  "remote-work-006",
        "category":  "Remote Work \u0026 Public Wi-Fi",
        "text":  "Working remotely does not reduce your security responsibilities."
    },
    {
        "id":  "remote-work-007",
        "category":  "Remote Work \u0026 Public Wi-Fi",
        "text":  "Be aware of people looking over your shoulder in public."
    },
    {
        "id":  "remote-work-008",
        "category":  "Remote Work \u0026 Public Wi-Fi",
        "text":  "Secure your home Wi-Fi with a strong password."
    },
    {
        "id":  "remote-work-009",
        "category":  "Remote Work \u0026 Public Wi-Fi",
        "text":  "Never use shared computers to access company accounts."
    },
    {
        "id":  "remote-work-010",
        "category":  "Remote Work \u0026 Public Wi-Fi",
        "text":  "Protect your workspace, even when your office is a café."
    },
    {
        "id":  "usb-001",
        "category":  "USB Devices \u0026 Unknown Hardware",
        "text":  "Never plug an unknown USB device into your work computer."
    },
    {
        "id":  "usb-002",
        "category":  "USB Devices \u0026 Unknown Hardware",
        "text":  "A USB drive left behind may be a security trap."
    },
    {
        "id":  "usb-003",
        "category":  "USB Devices \u0026 Unknown Hardware",
        "text":  "Unknown devices should never be trusted because they look harmless."
    },
    {
        "id":  "usb-004",
        "category":  "USB Devices \u0026 Unknown Hardware",
        "text":  "Use only company-approved external devices."
    },
    {
        "id":  "usb-005",
        "category":  "USB Devices \u0026 Unknown Hardware",
        "text":  "USB devices can carry malware without showing obvious signs."
    },
    {
        "id":  "usb-006",
        "category":  "USB Devices \u0026 Unknown Hardware",
        "text":  "Found a USB drive? Hand it over to IT Security."
    },
    {
        "id":  "usb-007",
        "category":  "USB Devices \u0026 Unknown Hardware",
        "text":  "A free charging cable may not be as harmless as it looks."
    },
    {
        "id":  "usb-008",
        "category":  "USB Devices \u0026 Unknown Hardware",
        "text":  "Avoid connecting personal devices to company equipment without authorization."
    },
    {
        "id":  "usb-009",
        "category":  "USB Devices \u0026 Unknown Hardware",
        "text":  "Convenience should never override security."
    },
    {
        "id":  "usb-010",
        "category":  "USB Devices \u0026 Unknown Hardware",
        "text":  "When a device is unfamiliar, leave it disconnected."
    },
    {
        "id":  "updates-001",
        "category":  "Software Updates \u0026 Security Patches",
        "text":  "Software updates fix security weaknesses. Do not ignore them."
    },
    {
        "id":  "updates-002",
        "category":  "Software Updates \u0026 Security Patches",
        "text":  "Delaying updates can leave your device exposed."
    },
    {
        "id":  "updates-003",
        "category":  "Software Updates \u0026 Security Patches",
        "text":  "Restarting your computer may be part of keeping it secure."
    },
    {
        "id":  "updates-004",
        "category":  "Software Updates \u0026 Security Patches",
        "text":  "Use only company-approved software."
    },
    {
        "id":  "updates-005",
        "category":  "Software Updates \u0026 Security Patches",
        "text":  "Unauthorized applications can introduce security risks."
    },
    {
        "id":  "updates-006",
        "category":  "Software Updates \u0026 Security Patches",
        "text":  "Outdated software is an easier target for attackers."
    },
    {
        "id":  "updates-007",
        "category":  "Software Updates \u0026 Security Patches",
        "text":  "Never bypass security updates without authorization."
    },
    {
        "id":  "updates-008",
        "category":  "Software Updates \u0026 Security Patches",
        "text":  "Update requests should come through approved channels."
    },
    {
        "id":  "updates-009",
        "category":  "Software Updates \u0026 Security Patches",
        "text":  "Keeping your device updated is everyone\u0027s responsibility."
    },
    {
        "id":  "updates-010",
        "category":  "Software Updates \u0026 Security Patches",
        "text":  "A few minutes updating can prevent hours of disruption."
    },
    {
        "id":  "incidents-001",
        "category":  "Incident Reporting",
        "text":  "Report suspicious activity immediately. Early reporting can limit damage."
    },
    {
        "id":  "incidents-002",
        "category":  "Incident Reporting",
        "text":  "You don\u0027t need proof to report a security concern."
    },
    {
        "id":  "incidents-003",
        "category":  "Incident Reporting",
        "text":  "Reporting a mistake is better than hiding it."
    },
    {
        "id":  "incidents-004",
        "category":  "Incident Reporting",
        "text":  "If you clicked a suspicious link, report it immediately."
    },
    {
        "id":  "incidents-005",
        "category":  "Incident Reporting",
        "text":  "Never assume someone else has already reported the incident."
    },
    {
        "id":  "incidents-006",
        "category":  "Incident Reporting",
        "text":  "Lost devices should be reported as soon as possible."
    },
    {
        "id":  "incidents-007",
        "category":  "Incident Reporting",
        "text":  "Unusual account activity deserves immediate attention."
    },
    {
        "id":  "incidents-008",
        "category":  "Incident Reporting",
        "text":  "Security incidents can happen to anyone. Reporting is what matters."
    },
    {
        "id":  "incidents-009",
        "category":  "Incident Reporting",
        "text":  "The sooner Security knows, the sooner they can respond."
    },
    {
        "id":  "incidents-010",
        "category":  "Incident Reporting",
        "text":  "Don\u0027t delay reporting because you\u0027re afraid of getting in trouble."
    },
    {
        "id":  "social-engineering-001",
        "category":  "Social Engineering \u0026 Impersonation",
        "text":  "Not every request from a familiar name is legitimate. Verify the identity."
    },
    {
        "id":  "social-engineering-002",
        "category":  "Social Engineering \u0026 Impersonation",
        "text":  "Attackers can impersonate managers to create pressure."
    },
    {
        "id":  "social-engineering-003",
        "category":  "Social Engineering \u0026 Impersonation",
        "text":  "Urgent requests for money or sensitive data should always be verified."
    },
    {
        "id":  "social-engineering-004",
        "category":  "Social Engineering \u0026 Impersonation",
        "text":  "Never share confidential information just because someone asks confidently."
    },
    {
        "id":  "social-engineering-005",
        "category":  "Social Engineering \u0026 Impersonation",
        "text":  "Verify unusual requests through a separate trusted communication channel."
    },
    {
        "id":  "social-engineering-006",
        "category":  "Social Engineering \u0026 Impersonation",
        "text":  "Attackers exploit trust, not just technology."
    },
    {
        "id":  "social-engineering-007",
        "category":  "Social Engineering \u0026 Impersonation",
        "text":  "A phone call can be just as dangerous as a phishing email."
    },
    {
        "id":  "social-engineering-008",
        "category":  "Social Engineering \u0026 Impersonation",
        "text":  "Be cautious when someone asks you to bypass normal procedures."
    },
    {
        "id":  "social-engineering-009",
        "category":  "Social Engineering \u0026 Impersonation",
        "text":  "If someone pressures you to keep a request secret, take a step back."
    },
    {
        "id":  "social-engineering-010",
        "category":  "Social Engineering \u0026 Impersonation",
        "text":  "Trust the process. Verify the person."
    }
];

