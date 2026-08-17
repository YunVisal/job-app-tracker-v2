const APPLIED = 'APPLIED';
const SCREENING = 'SCREENING';
const INTERVIEWING = 'INTERVIEWING';
const OFFER = 'OFFER';
const ACCEPTED = 'ACCEPTED';
const DECLINED = 'DECLINED';
const REJECTED = 'REJECTED';
const GHOSTED = 'GHOSTED';

export const APPLICATION_STATUS = {
    APPLIED,
    SCREENING,
    INTERVIEWING,
    OFFER,
    ACCEPTED,
    DECLINED,
    REJECTED,
    GHOSTED
} as const;

export const APPLICATION_STATUS_CONFIG = {
    SAVED: { label: 'Saved', color: 'saved' },
    APPLIED: { label: 'Applied', color: 'applied' },
    SCREENING: { label: 'Screening', color: 'screening' },
    INTERVIEWING: { label: 'Interviewing', color: 'interviewing' },
    OFFER: { label: 'Offer', color: 'offer' },
    ACCEPTED: { label: 'Accepted', color: 'accepted' },
    DECLINED: { label: 'Declined', color: 'declined' },
    REJECTED: { label: 'Rejected', color: 'rejected' },
    GHOSTED: { label: 'Ghosted', color: 'ghosted' },
} as const