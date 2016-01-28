	var Avatar = React.createClass({

		getDefaultProps: function() {
		 	return { 
		 		path: 'https://id.gravatar.com/userimage/6222337/3ccce07555cc79b006310995ddca6b19.jpg?size=200'
		 	};
		},

		render: function() {
			return (
				<div>
					<a href={this.props.path}>
						<img src={this.props.path} />
					</a>
				</div>
			);
		}

	});
	React.render(<Avatar path="https://id.gravatar.com/userimage/6222337/7512f347fb941e0f539b7814e42e3a93.jpg?size=200"/>, document.body);