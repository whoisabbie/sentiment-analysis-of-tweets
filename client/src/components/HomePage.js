import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render () {
    if(this.props.isLoggedIn) {
      return <Redirect to='/dashboard' />
    } else {
      return (
        <div className="container-fluid">
          <h1>Home Page Component</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ante diam, non volutpat justo feugiat at. Morbi eu iaculis ipsum, vitae suscipit est. Cras elementum ligula non ante lacinia luctus. Nam feugiat ornare ex eget aliquam. Maecenas ligula arcu, lobortis ut lorem et, bibendum consectetur nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at vestibulum arcu. Praesent tincidunt leo sit amet massa scelerisque sagittis. Praesent eu condimentum est, eget eleifend ligula. Integer rutrum tellus massa, ac dignissim erat laoreet ac. Aliquam eu auctor turpis, a tristique neque. Suspendisse ultrices justo libero, nec laoreet ipsum pellentesque ac
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ante diam, non volutpat justo feugiat at. Morbi eu iaculis ipsum, vitae suscipit est. Cras elementum ligula non ante lacinia luctus. Nam feugiat ornare ex eget aliquam. Maecenas ligula arcu, lobortis ut lorem et, bibendum consectetur nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at vestibulum arcu. Praesent tincidunt leo sit amet massa scelerisque sagittis. Praesent eu condimentum est, eget eleifend ligula. Integer rutrum tellus massa, ac dignissim erat laoreet ac. Aliquam eu auctor turpis, a tristique neque. Suspendisse ultrices justo libero, nec laoreet ipsum pellentesque ac
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ante diam, non volutpat justo feugiat at. Morbi eu iaculis ipsum, vitae suscipit est. Cras elementum ligula non ante lacinia luctus. Nam feugiat ornare ex eget aliquam. Maecenas ligula arcu, lobortis ut lorem et, bibendum consectetur nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at vestibulum arcu. Praesent tincidunt leo sit amet massa scelerisque sagittis. Praesent eu condimentum est, eget eleifend ligula. Integer rutrum tellus massa, ac dignissim erat laoreet ac. Aliquam eu auctor turpis, a tristique neque. Suspendisse ultrices justo libero, nec laoreet ipsum pellentesque ac
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ante diam, non volutpat justo feugiat at. Morbi eu iaculis ipsum, vitae suscipit est. Cras elementum ligula non ante lacinia luctus. Nam feugiat ornare ex eget aliquam. Maecenas ligula arcu, lobortis ut lorem et, bibendum consectetur nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at vestibulum arcu. Praesent tincidunt leo sit amet massa scelerisque sagittis. Praesent eu condimentum est, eget eleifend ligula. Integer rutrum tellus massa, ac dignissim erat laoreet ac. Aliquam eu auctor turpis, a tristique neque. Suspendisse ultrices justo libero, nec laoreet ipsum pellentesque ac
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ante diam, non volutpat justo feugiat at. Morbi eu iaculis ipsum, vitae suscipit est. Cras elementum ligula non ante lacinia luctus. Nam feugiat ornare ex eget aliquam. Maecenas ligula arcu, lobortis ut lorem et, bibendum consectetur nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at vestibulum arcu. Praesent tincidunt leo sit amet massa scelerisque sagittis. Praesent eu condimentum est, eget eleifend ligula. Integer rutrum tellus massa, ac dignissim erat laoreet ac. Aliquam eu auctor turpis, a tristique neque. Suspendisse ultrices justo libero, nec laoreet ipsum pellentesque ac
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ante diam, non volutpat justo feugiat at. Morbi eu iaculis ipsum, vitae suscipit est. Cras elementum ligula non ante lacinia luctus. Nam feugiat ornare ex eget aliquam. Maecenas ligula arcu, lobortis ut lorem et, bibendum consectetur nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at vestibulum arcu. Praesent tincidunt leo sit amet massa scelerisque sagittis. Praesent eu condimentum est, eget eleifend ligula. Integer rutrum tellus massa, ac dignissim erat laoreet ac. Aliquam eu auctor turpis, a tristique neque. Suspendisse ultrices justo libero, nec laoreet ipsum pellentesque ac
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ante diam, non volutpat justo feugiat at. Morbi eu iaculis ipsum, vitae suscipit est. Cras elementum ligula non ante lacinia luctus. Nam feugiat ornare ex eget aliquam. Maecenas ligula arcu, lobortis ut lorem et, bibendum consectetur nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at vestibulum arcu. Praesent tincidunt leo sit amet massa scelerisque sagittis. Praesent eu condimentum est, eget eleifend ligula. Integer rutrum tellus massa, ac dignissim erat laoreet ac. Aliquam eu auctor turpis, a tristique neque. Suspendisse ultrices justo libero, nec laoreet ipsum pellentesque ac
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ante diam, non volutpat justo feugiat at. Morbi eu iaculis ipsum, vitae suscipit est. Cras elementum ligula non ante lacinia luctus. Nam feugiat ornare ex eget aliquam. Maecenas ligula arcu, lobortis ut lorem et, bibendum consectetur nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at vestibulum arcu. Praesent tincidunt leo sit amet massa scelerisque sagittis. Praesent eu condimentum est, eget eleifend ligula. Integer rutrum tellus massa, ac dignissim erat laoreet ac. Aliquam eu auctor turpis, a tristique neque. Suspendisse ultrices justo libero, nec laoreet ipsum pellentesque ac
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ante diam, non volutpat justo feugiat at. Morbi eu iaculis ipsum, vitae suscipit est. Cras elementum ligula non ante lacinia luctus. Nam feugiat ornare ex eget aliquam. Maecenas ligula arcu, lobortis ut lorem et, bibendum consectetur nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at vestibulum arcu. Praesent tincidunt leo sit amet massa scelerisque sagittis. Praesent eu condimentum est, eget eleifend ligula. Integer rutrum tellus massa, ac dignissim erat laoreet ac. Aliquam eu auctor turpis, a tristique neque. Suspendisse ultrices justo libero, nec laoreet ipsum pellentesque ac
          </p>
          <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis ante diam, non volutpat justo feugiat at. Morbi eu iaculis ipsum, vitae suscipit est. Cras elementum ligula non ante lacinia luctus. Nam feugiat ornare ex eget aliquam. Maecenas ligula arcu, lobortis ut lorem et, bibendum consectetur nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus at vestibulum arcu. Praesent tincidunt leo sit amet massa scelerisque sagittis. Praesent eu condimentum est, eget eleifend ligula. Integer rutrum tellus massa, ac dignissim erat laoreet ac. Aliquam eu auctor turpis, a tristique neque. Suspendisse ultrices justo libero, nec laoreet ipsum pellentesque ac
          </p>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

export default connect(mapStateToProps)(HomePage);