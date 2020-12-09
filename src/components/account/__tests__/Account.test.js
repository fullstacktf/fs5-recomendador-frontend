import { render } from '@testing-library/vue';
import Account from '@/components/account/Account.vue';

describe('render', () => {
    test('should render component', () => {
      render(Account);
    });
});