/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('http://localhost:4200')
  cy.contains('a.nav-link', 'Country Details').click()
})

describe('Country Details', () => {
  it('click country details link', () => {
    cy.location('pathname').should('equal', '/country')
  })

  it('input validated two-letter iso code', (done) => {
    setTimeout(()=> {
      const isoCodeTwoLetter = 'br';

      cy.get('[data-cy=countryCode]').clear().type(isoCodeTwoLetter)
      cy.get('[data-cy=search]').click()
      cy.get('[data-cy=countryList]').should('be.visible').then(() => {
        done()
      })
    },10)
  });

  it('input validated three-letter iso code', (done) => {
    setTimeout(()=> {
      const isoCodeThreeLetter = 'GBR';
      cy.get('[data-cy=countryCode]').clear().type(isoCodeThreeLetter)
      cy.get('[data-cy=search]').click()
      cy.get('[data-cy=countryList]').should('be.visible').then(() => {
        done()
      })
    },10)
  });

  it('input invalidate two-letter iso code', (done) => {
    setTimeout(()=> {
      const isoCode = 'bc';
      cy.get('[data-cy=countryCode]').clear().type(isoCode)
      cy.get('[data-cy=search]').click()
      cy.contains('[data-cy=apiErrorMessage]', 'The provided parameter value is not valid').then(() => {
        done()
      })
    },10)
  })

  it('input invalidate iso code with number', (done) => {
    setTimeout(() => {
      const isoCode = 'b1';
      cy.get('[data-cy=countryCode]').clear().type(isoCode)
      cy.contains('[data-cy=invalidMessage]', 'Country code must be 2 or 3 letters.')
      .then(() => {
        done()
      })
    }, 10);
  })

  it('input invalidate iso code with 4 letters', (done) => {
    setTimeout(() => {
      const isoCode = 'GDPR';
      cy.get('[data-cy=countryCode]').clear().type(isoCode)
      cy.contains('[data-cy=invalidMessage]', 'Country code must be at most 3 letters long')
      .then(() => {
        done()
      })
    }, 10);
  })

  it('input invalidate iso code with 1 letters', (done) => {
    setTimeout(() => {
      const isoCode = 'G';
      cy.get('[data-cy=countryCode]').clear().type(isoCode)
      cy.contains('[data-cy=invalidMessage]', 'Country code must be at least 2 letters long.')
      .then(() => {
        done()
      })
    }, 10);
  })

});
