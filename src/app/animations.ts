import { trigger, state, style, transition, animate } from '@angular/animations';

export let fade = trigger('fade', [
    state('true', style({ opacity: 1})),
    state('false', style({ opacity: 0})),
    transition('false <=> true', animate(1500))
]);

export let move = trigger('move', [
    state('true', style({ top: 0 })),
    state('false', style({ top: 1000})),
    transition('false <=> true', animate(1500))
]);