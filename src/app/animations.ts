import { trigger, state, style, transition, animate } from '@angular/animations';

export const fade = trigger('fade', [
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: 0, zIndex: -1 })),
    transition('false <=> true', animate(500))
]);

export const move = trigger('move', [
    transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(100%)' }))
    ])
]);

