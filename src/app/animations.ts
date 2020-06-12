import { trigger, state, style, transition, animate } from '@angular/animations';

export const fade2 = trigger('fade2', [
    state('true', style({ opacity: 1 })),
    state('false', style({ opacity: 0, zIndex: -1 })),
    transition('false <=> true', animate(500))
]);

export const move = trigger('move', [
    transition(':enter', [
        style({ opacity: 1 }), animate(50),
        
    ]),
    transition(':leave', [
        animate('500ms ease-in', style({ transform: 'translateX(100%)' }))
    ])
]);

export const fade = trigger('fade', [
    transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('500ms ease-in', style({ transform: 'translateY(0%)' }))
    ]),
    transition(':enter', [
        style({ opacity: 0 }), animate(700),
        
    ]),
]);